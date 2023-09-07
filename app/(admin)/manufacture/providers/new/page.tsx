"use client";
import PageForm from "@/components/core/PageForm";
import Input from "@/components/controls/Input";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import useProviders from "@/hooks/useProviders";

const NewProvider = () => {
  const { register, handleSubmit } = useForm();
  const { newProvider } = useProviders();
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const response = await newProvider({
      name: data.name,
      phone: data.phone,
    });
    if (response.status === "success") {
      toast({
        title: "Proveedor agregado.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push("/manufacture/providers");
    }
  };

  return (
    <PageForm
      key="providers-new"
      header="Agregar nuevo proveedor"
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Input name="name" label="Nombre" addPlaceholder r={register} />
      <Input name="phone" label="Teléfono" addPlaceholder r={register} />
    </PageForm>
  );
};

export default NewProvider;
