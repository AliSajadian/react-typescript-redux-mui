import { 
  Paper, 
  styled, 
  Table, 
  TableBody, 
  TableCell, 
  tableCellClasses, 
  TableContainer, 
  TableHead, 
  TableRow 
} from "@mui/material";
import { FC } from "react";


/* mui DataTable Styles */

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: 'whitesmoke',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
    color: 'inherit',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


/** Helpers */

// helper to get an array containing the object values with
// the correct type infered.
function objectValues<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => obj[objKey as keyof T]);
}

function objectKeys<T extends {}>(obj: T) {
  return Object.keys(obj).map((objKey) => objKey as keyof T);
}

type PrimitiveType = string | Symbol | number | boolean;

// Type guard for the primitive types which will support printing
// out of the box
function isPrimitive(value: any): value is PrimitiveType {
  return (
      typeof value === "string" ||
      typeof value === "number" ||
      typeof value === "boolean" ||
      typeof value === "symbol"
  );
}

/** Component */

interface MinTableItem {
  id: PrimitiveType;
}

type TableHeaders<T extends MinTableItem> = Record<keyof T, string>;

type CustomRenderers<T extends MinTableItem> = Partial<
  Record<keyof T, (it: T) => React.ReactNode>
>;

interface TableProps<T extends MinTableItem> {
  items: T[];
  headers: TableHeaders<T>;
  customRenderers?: CustomRenderers<T>;
}

// export default function DataTable<T extends MinTableItem>(props: TableProps<T>) {

export default function GenericTable<T extends MinTableItem>(props: TableProps<T>) {
  function renderRow(item: T): React.ReactNode {
    return (
      <StyledTableRow>
        {objectKeys(item).map((itemProperty) => {
          const customRenderer = props.customRenderers?.[itemProperty];

          if (customRenderer) {
            return <StyledTableCell>{customRenderer(item)}</StyledTableCell>;
          }

          const value:any = isPrimitive(item[itemProperty]) ?
           item[itemProperty] : 
           ""
          return (
            <StyledTableCell>
                {value}
            </StyledTableCell>
          );
        })}
      </StyledTableRow>
    );
  }

  return (
      <TableContainer component={Paper} sx={{width:'80%'}}>
          <Table sx={{ minWidth: 500 }} aria-label="customized table">
              <TableHead>
                  <TableRow>
                      {objectValues(props.headers).map((headerValue) => (
                          <StyledTableCell align="center">{headerValue}</StyledTableCell>
                      ))}
                  </TableRow>
              </TableHead>
              <TableBody>
                  {props.items.map(renderRow)}
              </TableBody>
          </Table>
      </TableContainer>
  );
}
