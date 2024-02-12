import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

export const Stress = ({ setTitle }) => {
  setTitle("Stressed?");
  useEffect(() => {
    const ctx = document.getElementById("myChart").getContext("2d");
    new Chart(ctx, {
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
  }, []);

  return (
    <div className="w-200 h-200 m-96">
      <canvas id="myChart" />
    </div>
  );
};
