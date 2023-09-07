import HookResponse from "@/types/HookResponse";
import axios from "axios";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

type NewStatus = {
  name: string;
  stage_id: string;
};

const useStatuses = () => {
  const [status, setStatuses] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const newStatus = async ({ name, stage_id }: NewStatus): Promise<HookResponse> => {
    const data = await axios.post(`${url}/api/status`, {
      name,
      stage_id: Number(stage_id),
    });
    console.log(data);
    return {
      status: "success",
    };
  };

  const getStatuses = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/status`);
    console.log(response.data);
    setStatuses(response.data.data);
  };

  const getStatus = (id: string) => {

  };

  return {
    status,
    getStatuses,
    getStatus,
    newStatus,
    loading,
  };
};

export default useStatuses;
