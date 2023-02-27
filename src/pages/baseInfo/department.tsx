import { ReactElement, FC } from "react";
import { Box, Typography } from "@mui/material";
import GenericDataTable from "../../components/GenericDataTable";

function createData(
  id: number,
  name: string,
) {
  return { id, name };
}

const dataItems = [
  createData(1, 'Human Resource Department'),
  createData(2, 'Information Technology Department'),
  createData(3, 'Financial Department'),
  createData(4, 'Engineering Department'),
  createData(5, 'HSC Department'),
  createData(6, 'Research and Develope Department'),
];

const Department: FC = (): ReactElement => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        backgroundColor: "inherit",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <GenericDataTable
        headers={{
          id: "Id",
          name: "Name",
        }}
        items={dataItems}
      />
    </Box>
  );
};

export default Department;