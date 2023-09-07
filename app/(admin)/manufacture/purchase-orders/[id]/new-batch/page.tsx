"use client";
import PageForm from "@/components/core/PageForm";
import Input from "@/components/controls/Input";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useBatches from "@/hooks/useBatches";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Select from "@/components/controls/Select";
import useLocations from "@/hooks/useLocations";

const NewBatch = ({ params }: { params: { id: string } }) => {
  const { register, handleSubmit } = useForm();
  const toast = useToast();
  const { newBatch } = useBatches();
  const { getLocations, locations } = useLocations();
  const router = useRouter();

  useEffect(() => {
    getLocations();
  }, []);

  const onSubmit = async (data: any) => {
    console.log(data);
    const response = await newBatch({
      amount: Number(data.amount),
      description: data.description,
      unit: data.unit,
      price: Number(data.price) * 100,
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
      <Input
        name="description"
        label="Descripción"
        addPlaceholder
        r={register}
      />
      <Input name="amount" label="Cantidad" addPlaceholder r={register} />
      <Input name="unit" label="Unidad" addPlaceholder r={register} />
      <Input name="price" label="Precio total" addPlaceholder r={register} />
      <Select
        label="Ubicación destino"
        addPlaceholder
        name="location_id"
        r={register}
      >
        {locations.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </Select>
    </PageForm>
  );
};

export default NewBatch;
