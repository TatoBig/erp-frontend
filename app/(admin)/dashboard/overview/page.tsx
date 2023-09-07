"use client";
import Card from "@/components/core/Card";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import useBatches from "@/hooks/useBatches";
import useOrders from "@/hooks/useOrders";
import { Button, Td, Text, Tr, useToast } from "@chakra-ui/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { PiCheck } from "react-icons/pi";

export default function Page({ params }: { params: { id: string } }) {
  const { getOrder, order, confirmOrder } = useOrders();
  const { getBatches, batches } = useBatches();
  const router = useRouter();
  const toast = useToast();

  useEffect(() => {
    getBatches();
  }, []);

  return (
    <PageInfo header="Visualización general" key="order-info">
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
          },
        ]}
      >
        {batches.map((batch) => (
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
}
