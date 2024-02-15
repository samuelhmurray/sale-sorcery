import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const ProjectDetailsBarChart = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const myChart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["January", "February", "March", "April", "May"],
        datasets: [
          {
            label: "Sales",
            data: [100, 200, 150, 300, 250],
            backgroundColor: "rgba(54, 162, 235, 0.2)",
            borderColor: "rgba(54, 162, 235, 1)",
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div
      className="chart-container"
      style={{ position: "relative", width: "100%", height: "300px" }}
    >
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
};
