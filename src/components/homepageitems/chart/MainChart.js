import React, { PureComponent } from 'react';
import './chanrt.css'
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,AreaChart,Area, ResponsiveContainer
} from 'recharts';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const data = [
  {
    name: '1', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '2', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '3', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '4', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '5', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '6', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '7', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: '8', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: '9', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: '10', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: '11', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '12', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '13', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '14', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: '15', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '16', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '17', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '18', uv: 3490, pv: 4300, amt: 2100,
  },
  
  {
    name: '19', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '20', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: '21', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '22', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '23', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '24', uv: 3490, pv: 4300, amt: 2100,
  },
  {
    name: '25', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: '26', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: '27', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '28', uv: 3490, pv: 4300, amt: 2100,
  },
  
  {
    name: '29', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: '30', uv: 3490, pv: 4300, amt: 2100,
  },
  
];
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    width:'100%',
    display:'flex',
  },

}));

 const MainChart =() => {
  const classes = useStyles();

    return (

          <>
      <div className={classes.root}>
        <AreaChart data={data}
          width={980}
          height={500}
          margin={{ top: 70, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={0.7} fill="url(#colorUv)" />
          <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={0.7} fill="url(#colorPv)" />
        </AreaChart>
      
      </div>
           <Box width={1}> 
                
            </Box>
           </>
    );
  
}
export default MainChart;