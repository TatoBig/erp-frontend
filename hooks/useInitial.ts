import HookResponse from "@/types/HookResponse";
import axios from "axios";
import { useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

type NewLocation = {
  name: string;
  address: string;
  phone: string;
};

const useInitial = () => {
  const init = async () => {
    console.log("init");
    // await axios.post(`${url}/api/stages`, {
    //   id: 1,
    //   name: "Recepción",
    // });
    // await axios.post(`${url}/api/stages`, {
    //   id: 2,
    //   name: "Bodega",
    // });
    // await axios.post(`${url}/api/stages`, {
    //   id: 3,
    //   name: "Tránsito",
    // });
    // await axios.post(`${url}/api/status`, {
    //   id: 1,
    //   name: "Rechazado",
    //   stage_id: 1,
    // });
    // await axios.post(`${url}/api/status`, {
    //   id: 2,
    //   name: "Aceptado",
    //   stage_id: 1,
    // });
    // await axios.post(`${url}/api/status`, {
    //   id: 3,
    //   name: "Sin confirmar",
    //   stage_id: 3,
    // });
    await axios.post(`${url}/api/status`, {
      id: 4,
      name: "Confirmado",
      stage_id: 3,
    });
  };

  return {
    init,
  };
};

export default useInitial;
