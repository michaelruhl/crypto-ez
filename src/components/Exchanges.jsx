import millify from "millify";
import { Table, Card, Row, Col, Typography, Avatar } from "antd";
import HTMLReactParser from "html-react-parser";
import axios from "axios";
import { useEffect, useState } from "react";

import { useGetExchangesQuery } from "../services/cryptoApi";
import Loader from "./Loader";

const { Text } = Typography;

const Exchanges = () => {
  const [isLoading, setLoading] = useState(true);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios.get("https://api.coinlore.net/api/tickers/?limit=20").then((res) => {
      setDataList(res.data.data);
      

      setLoading(false);
    });
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  
  for (let data of dataList) {
    data.volume24 = millify(data.volume24);
    data.market_cap_usd = millify(data.market_cap_usd);
    data.percent_change_24h = data.percent_change_24h + "%";
  }

  const dataSource = dataList;

  const columns = [
    {
      title: "Rank",
      dataIndex: "rank",
      key: "rank",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "24H Volume",
      dataIndex: "volume24",
      key: "volume24",
    },
    {
      title: "Market Cap USD",
      dataIndex: "market_cap_usd",
      key: "market_cap_usd",
    },
    {
      title: "24h Price Change",
      dataIndex: "percent_change_24h",
      key: "percent_change_24h",
    },
  ];

  return (
    <>
      <Table dataSource={dataSource} columns={columns} />;
    </>
  );
};

export default Exchanges;
