"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";

const patterns = {
  email: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
};

const messages = {
  required: "Este campo es obligatorio",
  email: "Debes ingresar una dirección de correo correcta",
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Sign in to your account</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input
              {...register("email", {
                required: true,
                pattern: {
                  value: patterns.email,
                  message: messages.email,
                },
              })}
              type="email"
            />
            {errors.email && <p>{errors?.email?.message ?? ""}</p>}
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input
              {...register("pass", {
                required: messages.required,
              })}
              type="password"
            />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Text color={"blue.500"} onClick={() => router.push('/forgotpass')}>Forgot password?</Text>
            </Stack>
            <Button
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              onClick={() => router.push('/dashboard/overview')}
            >
              Ingresar
            </Button>
            <Button
              px={4}
              fontSize={"sm"}
              rounded={"full"}
              bg={"blue.400"}
              color={"white"}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "blue.500",
              }}
              onClick={() => router.push('/sign')}
            >
              Registrarse
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"cover"}
          src={
            "https://img.freepik.com/vector-premium/ilustracion-concepto-registro-vector-gratuito_269560-9.jpg?w=2000"
          }
        />
      </Flex>
    </Stack>
  );
}
