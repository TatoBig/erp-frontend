"use client";
import PageForm from "@/components/core/PageForm";
import Input from "@/components/controls/Input";
import React from "react";
import { useForm } from "react-hook-form";
import useBatches from "@/hooks/useBatches";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const NewBatch = ({ params }: { params: { id: string } }) => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const { newBatch } = useBatches();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    console.log(data);
    const response = await newBatch({
      amount: Number(data.amount),
      description: data.description,
      unit: data.unit,
      price: Number(data.price) * 100,
      status_id: Number(data.status_id),
      stage_id: Number(data.stage_id),
      location_id: Number(data.location_id),
      order_id: Number(params.id),
    });
    if (response.status === "success") {
      toast({
        title: "Lote agregado.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push(`/manufacture/purchase-orders/${params.id}`);
    }
  };

  return (
    <PageForm
      key="batch-new"
      header="Agregar nuevo lote"
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Input name="amount" label="Cantidad" addPlaceholder r={register} />
      <Input
        name="description"
        label="Descripción"
        addPlaceholder
        r={register}
      />
      <Input name="unit" label="Unidad" addPlaceholder r={register} />
      <Input name="price" label="Precio" addPlaceholder r={register} />
      <Input name="status_id" label="Estado" addPlaceholder r={register} />
      <Input name="stage_id" label="Etapa" addPlaceholder r={register} />
      <Input name="location_id" label="Ubicación" addPlaceholder r={register} />
    </PageForm>
  );
};

export default NewBatch;
