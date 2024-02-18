import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const PopSexByState = ({ malePopulation, femalePopulation }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current;
    if (ctx && malePopulation && femalePopulation) {
      const myChart = new Chart(ctx, {
        type: "doughnut",
        data: {
          labels: ["Male Population", "Female Population"],
          datasets: [
            {
              data: [malePopulation, femalePopulation],
              backgroundColor: [
                "rgba(255, 99, 132, 0.5)",
                "rgba(54, 162, 235, 0.5)",
              ],
              borderColor: ["rgba(255, 99, 132, 1)", "rgba(54, 162, 235, 1)"],
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
      return () => {
        myChart.destroy();
      };
    }
  }, [malePopulation, femalePopulation]);

  return (
    <div className="mt-20">
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};
