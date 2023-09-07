"use client";
import PageForm from "@/components/core/PageForm";
import Input from "@/components/controls/Input";
import React from "react";
import { useForm } from "react-hook-form";
import useLocations from "@/hooks/useLocations";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

const NewLocation = () => {
  const { register, handleSubmit } = useForm();
  const { newLocation } = useLocations();
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const response = await newLocation({
      name: data.name,
      address: data.address,
      phone: data.phone,
    });
    if (response.status === "success") {
      toast({
        title: "Ubicación agregada.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push("/tools/locations");
    }
  };

  return (
    <PageForm
      key="locations-new"
      header="Agregar nueva ubicación"
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Input name="name" label="Nombre" addPlaceholder r={register} />
      <Input name="address" label="Dirección" addPlaceholder r={register} />
      <Input name="phone" label="Teléfono" addPlaceholder r={register} />
    </PageForm>
  );
};

export default NewLocation;
