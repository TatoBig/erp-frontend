"use client";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import useStages from "@/hooks/useStages";
import { Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { getStages, stages } = useStages();

  useEffect(() => {
    getStages();
  }, []);

  return (
    <PageInfo
      description="Crea y administra las etapas de producción."
      header="Etapas de producción"
      key="stages"
      buttonText="Crear etapa"
      onClick={() => router.push("/tools/stages/new")}
    >
      <Table
        headCells={[
          {
            label: "ID",
          },
          {
            label: "Nombre",
          },
        ]}
      >
        {stages.map((stage) => (
          <Tr key={stage.id}>
            <Td>{stage.id}</Td>
            <Td>{stage.name}</Td>
          </Tr>
        ))}
      </Table>
    </PageInfo>
  );
};

export default Page;
