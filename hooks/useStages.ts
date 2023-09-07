import HookResponse from "@/types/HookResponse";
import axios from "axios";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

type NewStage = {
  name: string;
};

const useStages = () => {
  const [stages, setStages] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const newStage = async ({ name }: NewStage): Promise<HookResponse> => {
    const data = await axios.post(`${url}/api/stages`, {
      name,
    });
    console.log(data);
    return {
      status: "success",
    };
  };

  const getStages = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/stages`);
    console.log(response.data);
    setStages(response.data);
  };

  const getStage = (id: string) => {

  };

  return {
    stages,
    getStages,
    getStage,
    newStage,
    loading,
  };
};

export default useStages;
