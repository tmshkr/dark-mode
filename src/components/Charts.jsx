import React, { useState } from "react";
import { useActiveCoin } from "../hooks/useActiveCoin";
import Chart from "./Chart";

const Charts = ({ coinData }) => {
  const [activeCoin, setActiveCoin] = useActiveCoin();
  const coin = coinData[activeCoin];
  if (!coin) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className="charts">
      <div className="chart__container" key={coin.name}>
        <h2 className="coin__title">
          {coin.name} ({coin.symbol.toUpperCase()})
        </h2>
        <div className="coin__logo">
          <img src={coin.image} height="40" alt={coin.name} />
        </div>
        <Chart sparklineData={coin.sparkline_in_7d.price} />
      </div>
      <select onChange={e => setActiveCoin(e.target.value)} value={activeCoin}>
        {coinData.map((coin, index) => (
          <option key={coin.name} value={index}>
            {coin.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Charts;
