import { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import {GenericDataTable} from "../../../components";

const dataItems = [
  {
    id: 1,
    name: "Steak",
    image: {
      url: require("../../../assets/Steak.jpg"),
      width: 150,
      height: 150
    }
  },
  {
    id: 2,
    name: "Chicken",
    image: {
      url: require('../../../assets/Chicken.jpg'),
      width: 150,
      height: 150
    }
  },
  {
    id: 3,
    name: "Pizza",
    image: {
      url: require('../../../assets/Pizza.jpg'),
      width: 150,
      height: 150
    }
  },
  {
    id: 4,
    name: "Waffles",
    image: {
      url: require('../../../assets/Waffles.jpg'),
      width: 150,
      height: 150
    }
  },
  {
    id: 5,
    name: "Beef",
    image: {
      url: require('../../../assets/Beef.jpg'),
      width: 150,
      height: 150
    }
  },
  {
    id: 6,
    name: "Corn Beef",
    image: {
      url: require('../../../assets/CornBeef.jpg'),
      width: 150,
      height: 150
    }
  }
]


const Meal: FC<any> = (): ReactElement => {
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
          name: "Meal Name",
          image: "Image",
        }}
        items={dataItems}
        customRenderers={{
          image: (it: any) => (
          <img
            alt={`${it.name}`}
            src={it.image.url}
            width={it.image.width}
            height={it.image.height}
          /> 
          )
        }}
      />  
    </Box>
  );
};

export default Meal;

