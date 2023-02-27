import { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import {GenericDataTable} from "../../components";

function createData(
  id: number,
  name: string,
) {
  return { id, name };
}

const dataItems = [
  createData(1, 'Siberia coil mine improvement'),
  createData(2, 'Siberia oil refinement industry'),
  createData(3, 'West China iron mine reform'),
  createData(4, 'Dam Construction and maintenance'),
  createData(5, 'Construction department building'),
  createData(6, 'Develope and progress border terminals'),
];

const Project: FC = (): ReactElement => {
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
          name: "Project Name",
        }}
        items={dataItems}
      />
    </Box>
  );
};

export default Project;