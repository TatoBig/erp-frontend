"use client";
import PageForm from "@/components/core/PageForm";
import Input from "@/components/controls/Input";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import useStatuses from "@/hooks/useStatuses";
import { useRouter } from "next/navigation";
import { useToast } from "@chakra-ui/react";
import useStages from "@/hooks/useStages";
import Select from "@/components/controls/Select";

const NewStatus = () => {
  const { register, handleSubmit } = useForm();
  const { newStatus } = useStatuses();
  const { getStages, stages } = useStages();
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    getStages();
  }, []);

  useEffect(() => {
    console.log(stages);
  }, [stages]);

  const onSubmit = async (data: any) => {
    const response = await newStatus({
      name: data.name,
      stage_id: data.stage_id,
    });
    if (response.status === "success") {
      toast({
        title: "Estado creado.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push("/tools/status");
    }
  };

  return (
    <PageForm
      key="status-new"
      header="Crear nuevo estado"
      handleSubmit={handleSubmit(onSubmit)}
    >
      <Input name="name" label="Nombre" addPlaceholder r={register} />
      <Select
        label="Etapa perteneciente"
        addPlaceholder
        name="stage_id"
        placeholder={"Etapa"}
        r={register}
      >
        {stages.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </Select>
    </PageForm>
  );
};

export default NewStatus;
