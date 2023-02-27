import { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import GenericDataTable from "../../components/GenericDataTable";

function createData(
  id: number,
  name: string,
) {
  return { id, name };
}

const dataItems = [
  createData(1, 'Human Resource Employer'),
  createData(2, 'IT Manager'),
  createData(3, 'IT Help desk'),
  createData(4, 'Financial Manager'),
  createData(5, 'Financial Assistance'),
  createData(6, 'Accountant'),
  createData(7, 'Engineer'),
  createData(8, 'HSC Manager'),
  createData(9, 'Research and Develope Manager'),
];

const JobPosition: FC = (): ReactElement => {
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
          name: "Job Position",
        }}
        items={dataItems}
      />    
    </Box>
  );
};

export default JobPosition;