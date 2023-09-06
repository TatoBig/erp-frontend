import HookResponse from "@/types/HookResponse";
import { useState } from "react";

const useUsers = () => {
  const [users, setUsers] = useState({});

  const newUser = (): HookResponse => {
    return {
      message: "Usuario creado correctamente",
      status: "success",
    };
  };

  const getUsers = () => {

  }

  const getUser = (id: string) => {
    
  };

  return {
    users,
    getUsers,
    getUser,
  };
};

export default useUsers;
