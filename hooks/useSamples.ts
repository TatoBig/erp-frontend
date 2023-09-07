import HookResponse from "@/types/HookResponse";
import axios from "axios";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

const useSamples = () => {
  const [samples, setSamples] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const getSamples = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/sample`);
    console.log(response.data);
    setSamples(response.data.data);
  };

  return {
    samples,
    getSamples,
    loading,
  };
};

export default useSamples;
