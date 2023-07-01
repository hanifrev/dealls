import React, { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";
import theData from "../dummy/Products.json";

const Chart: React.FC = () => {
  const [brandsData, setBrandsData] = useState<any>(null);

  useEffect(() => {
    // Count the number of items per brand
    const brandCounts: Record<string, number> = {};
    theData.forEach((product: any) => {
      const { brand } = product;
      brandCounts[brand] = (brandCounts[brand] || 0) + 1;
    });

    // Prepare the data for ApexCharts
    const chartData = {
      options: {
        chart: {
          id: "brand-chart",
          type: "bar",
        },
        xaxis: {
          categories: Object.keys(brandCounts),
        },
      },
      series: [
        {
          name: "Number of Items",
          data: Object.values(brandCounts),
        },
      ],
    };

    setBrandsData(chartData);
  }, []);

  return brandsData ? (
    <ApexChart
      options={brandsData.options}
      series={brandsData.series}
      type="bar"
      height={350}
    />
  ) : null;
};

export default Chart;
