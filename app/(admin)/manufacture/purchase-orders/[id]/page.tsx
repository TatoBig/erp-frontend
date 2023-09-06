"use client";
import Card from "@/components/core/Card";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import useBatches from "@/hooks/useBatches";
import useOrders from "@/hooks/useOrders";
import { Button, Divider, Heading, Td, Text, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { getOrder, orders } = useOrders();
  const { getBatches, batches } = useBatches();
  const router = useRouter();

  useEffect(() => {
    getOrder(params.id);
  }, []);

  useEffect(() => {
    getBatches()
  }, [])
  

  return (
    <PageInfo header={orders[0] ?? "Cargando..."} key="order-info">
      <Card header="INFORMACIÓN DE LA ORDEN">
        <Text>Proveedor {"PROVEEDOR"}</Text>
        <div className="w-full h-px bg-gray-200 my-4"></div>
        <div>
          <Button
            onClick={() =>
              router.push(`/manufacture/purchase-orders/${params.id}/new-batch`)
            }
          >
            Agregar lote a la orden
          </Button>
          <Button
            className="ml-4 bg-green-500 hover:bg-green-400"
            onClick={() =>
              router.push(`/manufacture/purchase-orders/${params.id}/new-batch`)
            }
          >
            Confirmar orden
          </Button>
        </div>
      </Card>
      <div className="mt-8">
        <Table
          headCells={[
            {
              label: "ID",
            },
            {
              label: "Cantidad",
              isNumeric: true,
            },
            {
              label: "Descripción",
            },
            {
              label: "Unidad",
            },
            {
              label: "Precio",
              isNumeric: true,
            },
            {
              label: "Estado",
            },
            {
              label: "Etapa",
            },
            {
              label: "Ubicación",
            },
          ]}
        >
          {batches.map((batch) => (
            <Tr key={batch.id}>
              <Td>{batch.id}</Td>
              <Td isNumeric>{batch.amount}</Td>
              <Td>{batch.description}</Td>
              <Td>{batch.unit}</Td>
              <Td isNumeric>{batch.price / 100}</Td>
              <Td>{batch.status_id}</Td>
              <Td>{batch.stage_id}</Td>
              <Td>{batch.location_id}</Td>
            </Tr>
          ))}
        </Table>
      </div>
    </PageInfo>
  );
}
