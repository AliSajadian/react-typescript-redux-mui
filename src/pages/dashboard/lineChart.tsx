import { FC, ReactElement, useState } from "react";
import { Line } from "react-chartjs-2";
import { CategoryScale, LinearScale, PointElement, LineElement, Chart } from "chart.js";
import { Box, Typography, useTheme } from "@mui/material";


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
    plugins: IPlugins;
}
  
const LineChart: FC = (): ReactElement => {
  const theme = useTheme();
  const dat1:IData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'],
    datasets: [
      {
        label: 'Rainfall',
        fill: true,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        // backgroundFillColor: '#765423',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 69, 74, 88, 71, 90]
      }
    ]
  }
  // const dat2 = {
  //   labels: [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec"
  //   ],
  //   datasets: [
  //     {
  //       label: "Sales ($)",
  //       fill: true,
  //       backgroundColor: "transparent",
  //       borderColor: theme.palette.primary.main,
  //       data: [
  //         2015,
  //         1465,
  //         1487,
  //         1796,
  //         1387,
  //         2123,
  //         2866,
  //         2548,
  //         3902,
  //         4938,
  //         3917,
  //         4927
  //       ]
  //     },
  //     {
  //       label: "Orders",
  //       fill: true,
  //       backgroundColor: "transparent",
  //       borderColor: theme.palette.primary.light,
  //       borderDash: [4, 4],
  //       data: [
  //         928,
  //         734,
  //         626,
  //         893,
  //         921,
  //         1202,
  //         1396,
  //         1232,
  //         1524,
  //         2102,
  //         1506,
  //         1887
  //       ]
  //     }
  //   ]
  // };
  const opt1:IOptions = {
      responsive: true,
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
  // const opt2 = {
  //   maintainAspectRatio: false,
  //   legend: {
  //     display: false
  //   },
  //   tooltips: {
  //     intersect: false
  //   },
  //   hover: {
  //     intersect: true
  //   },
  //   plugins: {
  //     filler: {
  //       propagate: false
  //     }
  //   },
  //   scales: {
  //     xAxes: [
  //       {
  //         reverse: true,
  //         gridLines: {
  //           color: "rgba(0,0,0,0.05)"
  //         }
  //       }
  //     ],
  //     yAxes: [
  //       {
  //         ticks: {
  //           stepSize: 500
  //         },
  //         display: true,
  //         borderDash: [5, 5],
  //         gridLines: {
  //           color: "rgba(0,0,0,0)",
  //           fontColor: "#fff"
  //         }
  //       }
  //     ]
  //   }
  // };

  const [data] = useState<IData>(dat1);
  const [options] = useState<IOptions>(opt1);
  return (
    <Box 
      sx={{display:'flex' }} 
      flexGrow={1} 
      px={1}
    >
      <Box 
        sx={{display:'flex', flexDirection:'column'}} 
        width='30%' 
        mx={0} 
        px={0} 
        flexGrow={1}
      >
        <Typography 
          sx={{ fontSize:{xs:'8pt', sm:'9pt', md:'10pt', lg:'11pt', fontWeight:'bold'} }}
          mx={0} 
          px={0}
        >
          Personnel Satisfaction
        </Typography>
        <Typography 
          sx={{ fontSize:{xs:'7pt', sm:'8pt', md:'9', lg:'10pt'} }} 
          mx={0} 
          px={0}>
            {new Date().toLocaleString() + ""}
        </Typography>
      </Box>
      <Box 
        mx={0} 
        px={0} 
        width='70%'
        sx={{
          [theme.breakpoints.up('sm')]: {minWidth:'70%'}, 
        }}
      >
        <Line   
          height={230}
          width={300}
          style={{
            margin:'auto', 
            minWidth:300,
            minHeight:230}}        
          data={data} 
          options={options} />
      </Box>
    </Box>
  );
};
  export default LineChart;