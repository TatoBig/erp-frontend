"use client";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import useBatches from "@/hooks/useBatches";
import useProviders from "@/hooks/useProviders";
import { Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Page = () => {
  const router = useRouter();
  const { getBatches, batches } = useBatches();

  useEffect(() => {
    getBatches();
  }, []); 

  return (
    <PageInfo
      header="Bodega"
      key="inventory"
    >
      
      <Table
      headCells={[
        {
          label: "No. Lote",
        },
        {
          label: "Descripción",
        },
        {
          label: "Cantidad",
          isNumeric: true,
        },
        {
          label: "Unidad",
        },
        {
          label: "Precio total",
          isNumeric: true,
        },
        {
          label: "Estado",
        },
        {
          label: "Etapa",
        },
        {
          label: "Destino",
        }
      ]}
    >
      {batches
        .filter((batch) => batch.status_id === 6)
        .map((batch) => (
          <Tr key={batch.id}>
            <Td>{batch.id}</Td>
            <Td>{batch.description}</Td>
            <Td isNumeric>{batch.amount}</Td>
            <Td>{batch.unit}</Td>
            <Td isNumeric>{batch.price / 100}</Td>
            <Td>{batch.status?.name ?? ""}</Td>
            <Td>{batch.stage?.name ?? ""}</Td>
            <Td>{batch.location?.name ?? ""}</Td>
            
          </Tr>
        ))}
    </Table>
    </PageInfo>
  );
};

export default Page;
