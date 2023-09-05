"use client";
import PageInfo from "@/components/core/PageInfo";
import {
  Table,
  TableContainer,
  Tr,
  Th,
  Td,
  TableCaption,
  Tbody,
  Thead,
  Tfoot,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";

const Manufacture = () => {
  const router = useRouter()
  
  return (
    <PageInfo
      onClick={() => router.push('/manufacture/batch-samples/new')}
      header={"Muestras de lote"}
      buttonText="Generar nueva muestra"
      key="batch-samples"
    >
      <TableContainer>
        <Table
          variant="simple"
          borderRadius="2xl"
          borderWidth="1px"
          sx={{ borderCollapse: "separate", borderSpacing: "0 8px" }}
        >
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>
                multiply by
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td isNumeric>25.4</Td>
            </Tr>
            <Tr>
              <Td>feet</Td>
              <Td>centimetres (cm)</Td>
              <Td isNumeric>30.48</Td>
            </Tr>
            <Tr>
              <Td>yards</Td>
              <Td>metres (m)</Td>
              <Td isNumeric>0.91444</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </PageInfo>
  );
};

export default Manufacture;
