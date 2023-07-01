import React, { useState, useEffect } from "react";
import ApexChart from "react-apexcharts";
import { useGetProductsQuery } from "@/app/services/api";

const Chart: React.FC = () => {
  const { data } = useGetProductsQuery(50);

  const theData = data && data.products;
  const [brandsData, setBrandsData] = useState<any>(null);

  useEffect(() => {
    const brandCounts: Record<string, number> = {};
    theData &&
      theData.forEach((product: any) => {
        const { brand } = product;
        brandCounts[brand] = (brandCounts[brand] || 0) + 1;
      });

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
  }, [theData]);

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
