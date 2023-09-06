import HookResponse from "@/types/HookResponse";
import axios from "axios";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

type NewBatch = {
  amount: number;
  description: string;
  unit: string;
  price: number;
  status_id: number;
  stage_id: number;
  location_id: number;
  order_id: number;
};

const useBatches = () => {
  const [batches, setBatches] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const newBatch = async ({
    amount,
    description,
    location_id,
    order_id,
    price,
    stage_id,
    status_id,
    unit,
  }: NewBatch): Promise<HookResponse> => {
    const data = await axios.post(`${url}/api/batch`, {
      amount,
      description,
      entry_date: new Date().toISOString().slice(0, 19).replace("T", " "),
      location_id,
      order_id,
      price,
      stage_id,
      status_id,
      unit,
    });
    console.log(data);
    return {
      status: "success",
    };
  };

  const getBatches = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/batch`);
    console.log(response.data);
    setBatches(response.data.data);
  };

  const getBatch = (id: string) => {};

  return {
    batches,
    getBatches,
    getBatch,
    newBatch,
    loading,
  };
};

export default useBatches;
