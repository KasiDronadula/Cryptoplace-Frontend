import React, { useContext, useEffect, useState } from "react";
import "./Coin.css";
import { useParams } from "react-router-dom";
import { CoinContext } from "../../Context/CoinContext";
import LineChart from "../../Components/LineChart/LineChart";

const Coin = () => {
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();
  const { currency } = useContext(CoinContext);

  const fetchCoinData = async () => {
    try {
      const res = await fetch(`http://localhost:8080/api/coins/${coinId}`);
      const data = await res.json();
      setCoinData(data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchHistoricalData = async () => {
    try {
      const res = await fetch(
        `http://localhost:8080/api/coins/${coinId}/history?currency=${currency.name}`,
      );
      const data = await res.json();
      setHistoricalData(data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt="" />
          <p>
            <b>
              {coinData.name} ({coinData.symbol.toUpperCase()})
            </b>
          </p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>
        <div className="coin-info">
          <ul>
            <li>Crypto Market Rank</li>
            <li>{coinData.market_cap_rank}</li>
          </ul>
          <ul>
            <li>Current Price</li>
            <li>
              {" "}
              {currency.symbol}
              {coinData.market_data.current_price[
                currency.name
              ].toLocaleString()}{" "}
            </li>
          </ul>
          <ul>
            <li>Market Cap</li>
            <li>
              {" "}
              {currency.symbol}
              {coinData.market_data.market_cap[
                currency.name
              ].toLocaleString()}{" "}
            </li>
          </ul>
          <ul>
            <li>24 Hour high</li>
            <li>
              {" "}
              {currency.symbol}
              {coinData.market_data.high_24h[
                currency.name
              ].toLocaleString()}{" "}
            </li>
          </ul>
          <ul>
            <li>24 Hour low</li>
            <li>
              {" "}
              {currency.symbol}
              {coinData.market_data.low_24h[
                currency.name
              ].toLocaleString()}{" "}
            </li>
          </ul>
        </div>
      </div>
    );
  } else {
    return (
      <div className="spinner">
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
