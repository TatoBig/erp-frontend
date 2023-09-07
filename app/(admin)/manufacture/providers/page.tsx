"use client";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import useProviders from "@/hooks/useProviders";
import { Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { getProviders, providers } = useProviders();

  useEffect(() => {
    getProviders();
  }, []);

  useEffect(() => {
    console.log(providers)
  }, [providers])
  

  return (
    <PageInfo
      description="Crea y administra los proveedores."
      header="Proveedores"
      key="providers"
      buttonText="Agregar proveedor"
      onClick={() => router.push("/manufacture/providers/new")}
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
            label: "Teléfono",
          }
        ]}
      >
        {providers.map((provider) => (
          <Tr key={provider.id}>
            <Td>{provider.id}</Td>
            <Td>{provider.name}</Td>
            <Td>{provider.phone}</Td>
          </Tr>
        ))}
      </Table>
    </PageInfo>
  );
};

export default Page;
