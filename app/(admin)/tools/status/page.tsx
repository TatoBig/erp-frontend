"use client";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import useStatuses from "@/hooks/useStatuses";
import { Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { getStatuses, status } = useStatuses();

  useEffect(() => {
    getStatuses();
  }, []);

  return (
    <PageInfo
      description="Crea y administra los estados de producción."
      header="Estados de producción"
      key="status"
      buttonText="Crear estado"
      onClick={() => router.push("/tools/status/new")}
    >
      <Table
        headCells={[
          {
            label: "ID",
          },
          {
            label: "Nombre",
          },
          {
            label: "Etapa",
          },
        ]}
      >
        {status.map((s) => (
          <Tr key={s.id}>
            <Td>{s.id}</Td>
            <Td>{s.name}</Td>
            <Td>{s.stage_id}</Td>
          </Tr>
        ))}
      </Table>
    </PageInfo>
  );
};

export default Page;
