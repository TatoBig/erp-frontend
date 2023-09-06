"use client";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import DetailsIcon from "@/components/icons/DetailsIcon";
import { Td, Tr } from "@chakra-ui/react";

import { useRouter } from "next/navigation";
import React from "react";

const Manufacture = () => {
  const router = useRouter();

  return (
    <PageInfo
      onClick={() => router.push("/manufacture/batch-samples/new")}
      header="Muestras de lote"
      buttonText="Generar nueva muestra"
      key="batch-samples"
    >
      <Table
        headCells={[
          {
            label: "To convert",
          },
          {
            label: "into",
          },
          {
            isNumeric: true,
            label: "multiply by",
          },
        ]}
      >
        <Tr>
          <Td>inches</Td>
          <Td>millimetres (mm)</Td>
          <Td isNumeric>25.4</Td>
        </Tr>
      </Table>
    </PageInfo>
  );
};

export default Manufacture;
