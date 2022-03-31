import React from "react";
import { Chart } from "react-google-charts";


export const options = {
  legend: { position: "top" },
};

export default function DisplayChart(props) {
    const diffdata = [["Country","Sales"],
    ["North America", props.northAmericanSales],
    ["Japan",props.japaneseSales],
    ["Europe",props.europeSales],
    ["otherSales",props.otherSales],
    ["globalSales",props.globalSales]
    
]
  return (
    <Chart
      chartType="BarChart"
      width="100%"
      height="400px"
      diffdata={diffdata}
      options={options}
    />
  );
}
