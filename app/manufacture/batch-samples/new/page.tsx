"use client";
import PageForm from '@/components/core/PageForm'
import Input from '@/components/controls/Input'
import React from 'react'
import { useForm } from 'react-hook-form';

const NewBatchSample = () => {
  const { register, handleSubmit } = useForm()

  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <PageForm header="Generar nueva muestra" handleSubmit={handleSubmit(onSubmit)}>
      <Input name="firstname" label="Nombre" addPlaceholder r={register} />
      <Input name="lastname" label="Apellido" addPlaceholder r={register} />
      <Input name="age" label="Edad" addPlaceholder r={register} />
    </PageForm>
  )
}

export default NewBatchSample