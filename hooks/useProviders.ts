import HookResponse from "@/types/HookResponse";
import axios from "axios";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

type NewProvider = {
  name: string;
  phone: string;
};

const useProviders = () => {
  const [providers, setProviders] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const newProvider = async ({
    name,
    phone,
  }: NewProvider): Promise<HookResponse> => {
    const data = await axios.post(`${url}/api/provider`, {
      name,
      phone,
    });
    console.log(data);
    return {
      message: "Usuario creado correctamente",
      status: "success",
    };
  };

  const getProviders = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/provider`);
    console.log(response.data);
    setProviders(response.data.data);
  };

  const getProvider = (id: string) => {};

  return {
    providers,
    getProviders,
    getProvider,
    newProvider,
    loading,
  };
};

export default useProviders;
