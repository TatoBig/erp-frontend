"use client";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import useInitial from "@/hooks/useInitial";
import useLocations from "@/hooks/useLocations";
import { Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { getLocations, locations } = useLocations();

  useEffect(() => {
    getLocations();
  }, []);

  return (
    <PageInfo
      description="Crea y administra las distintas ubicaciones de la empresa."
      header="Ubicaciones"
      key="locations"
      buttonText="Agregar ubicacion"
      onClick={() => router.push("/tools/locations/new")}
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
            label: "Dirección",
          },
          {
            label: "Teléfono",
          }
        ]}
      >
        {locations.map((s) => (
          <Tr key={s.id}>
            <Td>{s.id}</Td>
            <Td>{s.name}</Td>
            <Td>{s.address}</Td>
            <Td>{s.phone}</Td>
          </Tr>
        ))}
      </Table>
    </PageInfo>
  );
};

export default Page;
