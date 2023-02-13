import { FC, ReactElement, useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, LineElement, Chart } from "chart.js";
import { Box, Typography } from "@mui/material";


Chart.register(CategoryScale);
Chart.register(LinearScale);
Chart.register(PointElement);
Chart.register(LineElement);


interface IDataset {
    label: string;
    fill: boolean;
    lineTension: number;
    backgroundColor: string;
    borderColor: string;
    borderWidth: number;
    data: number[]
}
interface IData {
    labels: string[];
    datasets: IDataset[];

}
type PositionType = 'top' | 'center' | 'left' | 'right' | 'bottom' | 'chartArea' | undefined;
interface ILegend {
    position: PositionType;
}
interface ITitle {
    display: boolean;
    text: string;
}
interface IPlugins {
    legend: ILegend;
    title: ITitle;
}
interface IOptions {
    responsive: boolean;
    maintainAspectRatio: boolean,
    plugins: IPlugins;
}
  
const LineChart: FC = (): ReactElement => {
  const dat1:IData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: 'Rainfall',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,162,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 69, 74, 88, 71, 90]
      }
    ]
  }

  const opt1:IOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        }
      }
    }

  const [data] = useState<IData>(dat1);
  const [options] = useState<IOptions>(opt1);
  return (
    <Box 
      sx={{display:'flex', flexDirection:'column'}} 
      flexGrow={1} 
      px={1}
    >
      <Box 
        sx={{display:'flex', justifyContent:'space-between'}} 
        mx={0} 
        px={0} 
        height='10%'
        flexGrow={1}
      >
        <Typography 
          sx={{ fontSize:{xs:'8pt', sm:'8pt', md:'9pt', lg:'10pt', fontWeight:'bold'} }}
          mx={0} 
          px={0}
        >
          Personnel Satisfaction
        </Typography>
        <Typography 
          sx={{ fontSize:{xs:'6pt', sm:'7pt', md:'7', lg:'8pt'} }} 
          mx={0} 
          px={0}>
            {new Date().toLocaleString() + ""}
        </Typography>
      </Box>
      <Box 
        mx={1} 
        my='auto'
        p={1} 
        border={1}
        height='99%'
        width='99%'
      >
        <Line   
          style={{
            margin:1, 
            minHeight:250,
            maxHeight:'inherit'
          }}        
          data={data} 
          options={options} />
      </Box>
    </Box>
  );
};
  export default LineChart;