import HookResponse from "@/types/HookResponse";
import axios from "axios";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

type NewOrder = {
  provider_id: string;
};

const useOrders = () => {
  const [orders, setOrders] = useState([] as any[]);
  const [order, setOrder] = useState({} as any);
  const [loading, setLoading] = useState(false);

  const newOrder = async ({ provider_id }: NewOrder): Promise<HookResponse> => {
    const data = await axios.post(`${url}/api/order`, {
      provider_id: Number(provider_id),
      status_id: 3,
    });
    console.log(data);
    return {
      message: "Usuario creado correctamente",
      status: "success",
    };
  };

  const confirmOrder = async (id: string) => {
    await axios.put(`${url}/api/order/${id}`, {
      status_id: 4,
    });
    const response = await axios.get(`${url}/api/batch`);
    const batches = response.data.data;

    batches.filter((batch: any) => batch.order_id === Number(id)).forEach(async (batch: any) => {
      await axios.put(`${url}/api/batch/${batch.id}`, {
        status_id: 4,
      })
    })

    return {
      status: "success",
    }
  };

  const getOrders = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/order`);
    console.log(response.data);
    setOrders(response.data.data);
    setLoading(false);
  };

  const getOrder = async (id: string) => {
    setLoading(true);
    const response = await axios.get(`${url}/api/order/${id}}`);
    setOrder(response.data);
    setLoading(false);
  };

  return {
    orders,
    getOrders,
    getOrder,
    newOrder,
    loading,
    order,
    confirmOrder,
  };
};

export default useOrders;
