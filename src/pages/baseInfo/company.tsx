import { ReactElement, FC } from "react";
import { Box } from "@mui/material";
import GenericDataTable from "../../components/GenericDataTable";
// import { useSelector } from "react-redux";

// import { RootState } from "../../redux/store/store";
// import { ICompany } from '../../models/company';
// import { ICompaniesState } from "../../redux/reducers/companyReducer";


function createData(
  id: number,
  name: string,
) {
  return { id, name };
}

const dataItems = [
  createData(1, 'Gazprom Co. Ltd.'),
  createData(2, 'Ural Mining and Metallurgical Co. Ltd.'),
  createData(3, 'Lukoil Co. Ltd.'),
  createData(4, 'United Shipbuilding Corporation'),
  createData(5, 'Sakhalin Energy Co. Ltd.'),
  createData(5, 'PetroChina Co. Ltd. (PCCYF)'),
  createData(6, 'Ping An Insurance (Group) Co. of China Ltd. (PNGAY)'),
  createData(7, 'Tencent Holdings Ltd (TCEHY)'),
  createData(8, 'Zijin Mining Group Co. Ltd (ZIJMF)'),
  createData(9, 'Tata Consultancy Services Co. Ltd.'),
  createData(10, 'HDFC Bank 3HDB'),
  createData(11, 'HDFC Bank 3HDB'),
  createData(12, 'HDFC Bank 3HDB'),
];

const Company: FC = (): ReactElement => {
  // const companiesState: ICompaniesState = useSelector((state: RootState) => state.companies)
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
          name: "Company Name",
        }}
        items={dataItems}
      />
    </Box>
  );
};

export default Company;