"use client";
import PageInfo from "@/components/core/PageInfo";
import Table from "@/components/core/Table";
import DetailsIcon from "@/components/icons/DetailsIcon";
import useBatches from "@/hooks/useBatches";
import useSamples from "@/hooks/useSamples";
import { Td, Tr, useToast } from "@chakra-ui/react";
import axios from "axios";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { PiCheck } from "react-icons/pi";

const Manufacture = () => {
  const router = useRouter();
  const { samples, getSamples } = useSamples();
  const toast = useToast();

  useEffect(() => {
    getSamples();
  }, []);

  return (
    <PageInfo
      onClick={() => router.push("/manufacture/batch-samples/new")}
      header="Muestras de lote"
      buttonText="Generar nueva muestra"
      key="batch-samples"
    >
      <Table
        headCells={[
          {
            label: "No. Muestra",
          },
          {
            label: "Estado",
          },
          {
            label: "Lote",
          },
          {
            label: "Mandar a bodega",
          },
        ]}
      >
        {samples.map((s) => (
          <Tr key={s.id}>
            <Td>{s.id}</Td>
            <Td>{s.status?.name ?? ""}</Td>
            <Td>{s.batch?.id ?? ""}</Td>
            <Td>
              <button
                className="disabled:text-gray-500 text-gray-900 disabled:cursor-not-allowed"
                disabled={s.status_id !== 2}
                onClick={() =>
                  axios
                    .put(
                      `${process.env.NEXT_PUBLIC_API_URL}/api/sample/${s.id}`,
                      {
                        status_id: 6,
                      }
                    )
                    .then(() =>
                      axios.put(
                        `${process.env.NEXT_PUBLIC_API_URL}/api/batch/${s.batch_id}`,
                        {
                          status_id: 6,
                          stage_id: 2,
                        }
                      )
                    )
                    .then(() =>
                      toast({
                        title: "Muestra enviada a bodega.",
                        status: "success",
                        duration: 4000,
                        isClosable: true,
                      })
                    )
                    .then(() => getSamples())
                }
              >
                <PiCheck />
              </button>
            </Td>
          </Tr>
        ))}
      </Table>
    </PageInfo>
  );
};

export default Manufacture;
