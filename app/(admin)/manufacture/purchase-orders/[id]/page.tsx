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
    getOrder(params.id);
    getBatches();
  }, []);

  const handleConfirmOrder = async () => {
    const response = await confirmOrder(params.id);
    if (response.status === "success") {
      toast({
        title: "Order confirmada.",
        description: "La orden se encuentra en tránsito.",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      getOrder(params.id);
      getBatches();
    }
  };

  return (
    <PageInfo header={"Orden No. " + order?.id ?? "Cargando"} key="order-info">
      <Card header={"Orden No. " + order?.id ?? "Cargando"}>
        <Text>
          <strong>Proveedor:</strong> {order?.provider?.name ?? "Cargando"}
        </Text>
        <Text>
          <strong>Estado:</strong> {order?.status?.name ?? "Cargando"}
        </Text>
        <div className="w-full h-px bg-gray-200 my-4"></div>
        <div>
          <Button
            isDisabled={order?.status_id !== 3}
            onClick={() =>
              router.push(`/manufacture/purchase-orders/${params.id}/new-batch`)
            }
          >
            Agregar lote a la orden
          </Button>
          <Button
            className="ml-4 bg-green-500 hover:bg-green-400 disabled:bg-gray-300 disabled:cursor-not-allowed"
            isDisabled={order?.status_id !== 3}
            onClick={() => handleConfirmOrder()}
          >
            Confirmar orden
          </Button>
        </div>
      </Card>
      <div className="mt-8">
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
            {
              label: "Marcar ingreso",
            },
          ]}
        >
          {batches
            .filter((batch) => batch.order_id === Number(params.id))
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
                <Td>
                  <button
                    onClick={() =>
                      axios
                        .put(
                          `${process.env.NEXT_PUBLIC_API_URL}/api/batch/${batch.id}`,
                          {
                            status_id: 5,
                            stage_id: 1,
                          }
                        )
                        .then(() => getBatches())
                        .then(() =>
                          toast({
                            title: "Lote en recepción.",
                            status: "success",
                            duration: 4000,
                            isClosable: true,
                          })
                        )
                    }
                    disabled={batch.status_id !== 4}
                    className="disabled:text-gray-500 text-gray-900 disabled:cursor-not-allowed"
                  >
                    <PiCheck />
                  </button>
                </Td>
              </Tr>
            ))}
        </Table>
      </div>
    </PageInfo>
  );
}
