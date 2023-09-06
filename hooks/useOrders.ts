import HookResponse from "@/types/HookResponse";
import axios from "axios";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

type NewOrder = {
  provider_id: string;
};

const useOrders = () => {
  const [orders, setOrders] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const newOrder = async ({ provider_id }: NewOrder): Promise<HookResponse> => {
    const data = await axios.post(`${url}/api/order`, {
      provider_id: Number(provider_id),
    });
    console.log(data);
    return {
      message: "Usuario creado correctamente",
      status: "success",
    };
  };

  const getOrders = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/order`);
    console.log(response.data);
    setOrders(response.data.data);
  };

  const getOrder = (id: string) => {};

  return {
    orders,
    getOrders,
    getOrder,
    newOrder,
    loading,
  };
};

export default useOrders;
