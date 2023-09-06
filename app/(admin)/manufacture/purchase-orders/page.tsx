"use client";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import useOrders from "@/hooks/useOrders";
import { Td, Tr } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { PiEye } from "react-icons/pi";

const Page = () => {
  const router = useRouter();
  const { getOrders, orders } = useOrders();

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <PageInfo
      description="Crea ordenes de compra."
      header="Ordenes de compra"
      key="purchase-orders"
      buttonText="Crear nueva orden de comrpa"
      onClick={() => router.push("/manufacture/purchase-orders/new")}
    >
      <Table
        headCells={[
          {
            label: "ID",
          },
          {
            label: "ID Proveedor",
          },
          {
            label: "Ver más",
          },
        ]}
      >
        {orders.map((order) => (
          <Tr key={order.id}>
            <Td>{order.id}</Td>
            <Td>{order.provider_id}</Td>
            <Td>
              <button onClick={() => router.push(`/manufacture/purchase-orders/${order.id}`)}>
                <PiEye />
              </button>
            </Td>
          </Tr>
        ))}
      </Table>
    </PageInfo>
  );
};

export default Page;
