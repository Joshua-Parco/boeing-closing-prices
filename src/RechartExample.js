import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const chartData = [
  {
    date: 'Page A', open: 4000, close: 2400, amt: 2400,
  },
  {
    date: 'Page B', open: 3000, close: 1398, amt: 2210,
  },
  {
    date: 'Page C', open: 2000, close: 9800, amt: 2290,
  },
  {
    date: 'Page D', open: 2780, close: 3908, amt: 2000,
  },
  {
    date: 'Page E', open: 1890, close: 4800, amt: 2181,
  },
  {
    date: 'Page F', open: 2390, close: 3800, amt: 2500,
  },
  {
    date: 'Page G', open: 3490, close: 4300, amt: 2100,
  },
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <LineChart
        width={500}
        height={300}
        data={chartData}
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="close" stroke="#8884d8" activeDot={{ r: 8 }} />
        <Line type="monotone" dataKey="open" stroke="#82ca9d" />
      </LineChart>
    );
  }
}

