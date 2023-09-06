"use client";
import PageForm from "@/components/core/PageForm";
import Input from "@/components/controls/Input";
import React from "react";
import { useForm } from "react-hook-form";
import useStages from "@/hooks/useStages";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";

const NewStage = () => {
  const { register, handleSubmit } = useForm();
  const { newStage } = useStages();
  const toast = useToast();
  const router = useRouter();

  const onSubmit = async (data: any) => {
    const response = await newStage({
      name: data.name,
    });
    if (response.status === "success") {
      toast({
        title: "Etapa creada.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push("/tools/stages");
    }
  };

  return (
    <PageForm
      key="stages-new"
      header="Crear nueva etapa"
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Input name="name" label="Nombre" addPlaceholder r={register} />
    </PageForm>
  );
};

export default NewStage;
