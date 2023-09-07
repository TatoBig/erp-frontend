"use client";
import PageForm from "@/components/core/PageForm";
import React, { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import Select from "@/components/controls/Select";
import useBatches from "@/hooks/useBatches";
import { Button, Divider, Heading, Text, useToast } from "@chakra-ui/react";
import Input from "@/components/controls/Input";
import axios from "axios";
import { useRouter } from "next/navigation";

const NewBatchSample = () => {
  const { register, handleSubmit, control, setValue } = useForm();
  const { batches, getBatches } = useBatches();
  const [sampleSize, setSampleSize] = useState(0);
  const router = useRouter();
  const toast = useToast();

  const selectedBatch = useWatch({ control, name: "selected" });
  const errors = useWatch({ control, name: "errors" });
  const aceptation = useWatch({ control, name: "aceptation" });

  useEffect(() => {
    getBatches();
  }, []);

  useEffect(() => {
    setValue("size", getSampleSize(selectedBatch));
  }, [selectedBatch]);

  const getSampleSize = (id: string) => {
    if (id) {
      const batch = batches.find((batch) => batch.id === Number(id));
      const top = batch.amount * (1.96 * 1.96) * 0.5 * 0.5;
      const bottom = 0.05 * 0.05 * (batch.amount - 1) + 1.96 * 1.96 * 0.5 * 0.5;
      console.log(top);
      console.log(bottom);
      console.log(Math.ceil(top / bottom));
      setSampleSize(Math.ceil(top / bottom));
      return Math.ceil(top / bottom);
    }
  };

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <PageForm
      key="batch-samples-new"
      header="Generar nueva muestra"
      handleSubmit={handleSubmit(onSubmit)}
      hideButton
    >
      <Select
        label="Lote para la muestra"
        addPlaceholder
        name="selected"
        r={register}
      >
        {batches
          .filter((batch) => batch.status_id === 5)
          .map((s) => (
            <option key={s.id} value={s.id}>
              Lote No. {s.id} - {s.description} {s.amount} {s.unit} - Orden No.{" "}
              {s.order_id}
            </option>
          ))}
      </Select>
      {selectedBatch && (
        <>
          <Divider className="my-4" />
          <Heading size="md">
            Lote No.{" "}
            {batches.find((batch) => batch.id === Number(selectedBatch))?.id}
          </Heading>
          <Divider className="my-4" />
          <Text>
            <strong>Descripción:</strong>{" "}
            {
              batches.find((batch) => batch.id === Number(selectedBatch))
                ?.description
            }
          </Text>
          <Text>
            <strong>Cantidad:</strong>{" "}
            {
              batches.find((batch) => batch.id === Number(selectedBatch))
                ?.amount
            }{" "}
            {batches.find((batch) => batch.id === Number(selectedBatch))?.unit}
          </Text>
          <Text>
            <strong>Precio total:</strong>{" "}
            {batches.find((batch) => batch.id === Number(selectedBatch))
              ?.price / 100}
          </Text>
          <Divider className="my-4" />
          <Input
            label="Tamaño de muestra recomendado"
            name="size"
            r={register}
            addPlaceholder
          ></Input>
          <Input
            label="Porcentaje de aceptación (%)"
            name="aceptation"
            type="number"
            r={register}
            addPlaceholder
          ></Input>
          <Input
            label="Fallos encontrados"
            name="errors"
            type="number"
            r={register}
            addPlaceholder
          ></Input>
          {aceptation && errors && (
            <>
              <Divider className="my-4" />
              <Text>
                <strong>Porcentaje de fallos:</strong>{" "}
                {Math.floor((Number(errors) / sampleSize) * 10000) / 100}%
              </Text>
              <Text>
                <strong>Recomendación:</strong>{" "}
                {Math.floor((Number(errors) / sampleSize) * 10000) / 100 <
                100 - Number(aceptation)
                  ? "Aceptar"
                  : "Rechazar"}
              </Text>
              <Divider className="my-4" />
              <div className="flex">
                <Button
                  className="bg-green-500"
                  onClick={() =>
                    axios
                      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/sample/`, {
                        result: 0,
                        batch_id: Number(selectedBatch),
                        order_id: batches.find(
                          (batch) => batch.id === Number(selectedBatch)
                        )?.order_id,
                        status_id: 2,
                      })
                      .then(() =>
                        axios.put(
                          `${process.env.NEXT_PUBLIC_API_URL}/api/batch/${selectedBatch}`,
                          {
                            status_id: 1,
                          }
                        )
                      )
                      .then(() =>
                        toast({
                          title: "Muestra aceptada.",
                          status: "success",
                          duration: 4000,
                          isClosable: true,
                        })
                      )
                      .then(() => router.push("/manufacture/batch-samples"))
                  }
                >
                  Aceptar
                </Button>
                <Button
                  className="ml-4 bg-red-500 text-white"
                  onClick={() =>
                    axios
                      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/sample/`, {
                        result: 0,
                        batch_id: Number(selectedBatch),
                        order_id: batches.find(
                          (batch) => batch.id === Number(selectedBatch)
                        )?.order_id,
                        status_id: 1,
                      })
                      .then(() =>
                        axios.put(
                          `${process.env.NEXT_PUBLIC_API_URL}/api/batch/${selectedBatch}`,
                          {
                            status_id: 1,
                          }
                        )
                      )
                      .then(() =>
                        toast({
                          title: "Muestra rechazada.",
                          status: "success",
                          duration: 4000,
                          isClosable: true,
                        })
                      )
                      .then(() => router.push("/manufacture/batch-samples"))
                  }
                >
                  Rechazar
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </PageForm>
  );
};

export default NewBatchSample;
