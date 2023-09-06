import {
  Table as ChakraTable,
  TableContainer,
  Tr,
  Th,
  TableCaption,
  Tbody,
  Thead,
  Tfoot,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
  headCells: {
    isNumeric?: boolean;
    label: string;
  }[];
};

const Table = ({ children, headCells }: TableProps) => {
  return (
    <TableContainer>
      <ChakraTable
        variant="simple"
        borderRadius="2xl"
        borderWidth="1px"
        sx={{ borderCollapse: "separate", borderSpacing: "0 8px" }}
      >
        <Thead>
          <Tr>
            {headCells.map((headCell) => (
              <Th key={headCell.label} isNumeric={headCell.isNumeric}>
                {headCell.label}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>{children}</Tbody>
        <Tfoot>
          <Tr>
            {headCells.map((headCell) => (
              <Th key={headCell.label} isNumeric={headCell.isNumeric}>
                {headCell.label}
              </Th>
            ))}
          </Tr>
        </Tfoot>
      </ChakraTable>
    </TableContainer>
  );
};

export default Table;
