import { useEffect, useState, } from 'react';
import axios from "axios";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import { BOEING_PRICES } from './hardCodedData';

const formatData = (dataFromAPI) => {
  let formattedData = [];
  dataFromAPI.forEach( data => {
    let formattedDate = new Date(data.date *1000)
    let day = formattedDate.getDate();
    let month = formattedDate.getMonth();
    let year = formattedDate.getFullYear();
    let fullDate = (month + 1) + "/" + day + "/" + year;
    let formattedDataElement = {...data, date: fullDate, } 
    formattedData.push(formattedDataElement);
  })
  return formattedData;
}

const options = {
  method: 'GET',
  url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/stock/v3/get-historical-data',
  params: {symbol: 'BA', region: 'US'},
  headers: {
    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
    'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
  }
};

const BoeingChart = () => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data.prices);
      let formattedData = formatData(response.data.prices).reverse();
      console.log(formattedData);
      setChartData(formattedData);
      // setChartData(response.data.prices);
    }).catch(function (error) {
      console.error(error);
      let formattedData = formatData(BOEING_PRICES).reverse();
      setChartData(formattedData);
      // setChartData(BOEING_PRICES);
    });
  }, []);

  return (
    <div>
      <h1>Boeing Closing and Opening Stock Prices</h1>
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
    </div>
  );
}


export default BoeingChart;
