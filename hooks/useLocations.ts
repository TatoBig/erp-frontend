import HookResponse from "@/types/HookResponse";
import axios from "axios";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

type NewLocation = {
  name: string;
  address: string;
  phone: string;
};

const useLocations = () => {
  const [locations, setLocations] = useState([] as any[]);
  const [loading, setLoading] = useState(false);

  const newLocation = async ({ name, address, phone }: NewLocation): Promise<HookResponse> => {
    const data = await axios.post(`${url}/api/location`, {
      name,
      address,
      phone,
      create_at: new Date().toISOString().slice(0, 19).replace("T", " "),
    });
    console.log(data);
    return {
      status: "success",
    };
  };

  const getLocations = async () => {
    setLoading(true);
    const response = await axios.get(`${url}/api/location`);
    console.log(response.data);
    setLocations(response.data.data);
  };

  const getLocation = (id: string) => {

  };

  return {
    locations,
    getLocations,
    getLocation,
    newLocation,
    loading,
  };
};

export default useLocations;
