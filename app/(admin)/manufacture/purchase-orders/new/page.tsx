"use client";
import PageForm from "@/components/core/PageForm";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import Select from "@/components/controls/Select";
import useProviders from "@/hooks/useProviders";
import useOrders from "@/hooks/useOrders";

const NewStatus = () => {
  const { register, handleSubmit } = useForm();
  const { newOrder } = useOrders();
  const { getProviders, providers } = useProviders();
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    getProviders();
  }, []);

  const onSubmit = async (data: any) => {
    const response = await newOrder({
      provider_id: data.provider_id,
    });

    if (response.status === "success") {
      toast({
        title: "Order inicializada.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push("/manufacture/purchase-orders/");
    }
  };

  return (
    <PageForm
      key="status-new"
      header="Crear nuevo estado"
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Select
        label="Proveedor"
        addPlaceholder
        name="provider_id"
        placeholder={"Proveedor"}
        r={register}
      >
        {providers.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </Select>
    </PageForm>
  );
};

export default NewStatus;
