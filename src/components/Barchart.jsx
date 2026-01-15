import React, { useRef, useEffect } from "react";
import ReactECharts from "echarts-for-react";

const Barchart = () => {
  const chartRef = useRef(null);

  const axisBreaks = [
    {
      start: 5000,
      end: 100000,
      gap: "1.5%",
    },
    {
      start: 105000,
      end: 3100000,
      gap: "1.5%",
    },
  ];

  const option = {
    title: {
      text: "Bar Chart with Axis Breaks",
      subtext: "Click the break area to expand it",
      left: "center",
      textStyle: {
        fontSize: 20,
      },
      subtextStyle: {
        color: "#175ce5",
        fontSize: 15,
        fontWeight: "bold",
      },
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      top: 70,
    },
    grid: {
      top: 120,
      left: 80,
      right: 40,
      bottom: 40,
    },
    yAxis: {
      type: "category",
      data: ["Jan23", "Jan21,22", "Jan19,20", "Jan16,17", "Jan14"],
    },
    xAxis: {
      type: "value",
      breaks: axisBreaks,
      breakArea: {
        itemStyle: {
          opacity: 1,
        },
        zigzagZ: 200,
      },
    },
    series: [
      {
        name: "Qty",
        type: "bar",
        data: [16000, 16000, 16000, 16000, 16000],
      },
      {
        name: "M.Tons",
        type: "bar",
        data: [870.11, 870.11, 870.11, 870.11, 870.11],
      },
      {
        name: "No of parties",
        type: "bar",
        data: [80, 20, 30, 40, 15],
      },
    ],
  };

  useEffect(() => {
    const chart = chartRef.current?.getEchartsInstance();
    if (!chart) return;

    // Axis break interaction
    chart.on("axisbreakchanged", (params) => {
      const needReset = params.breaks.some((b) => b.isExpanded);

      chart.setOption({
        graphic: [
          {
            elements: [
              {
                type: "rect",
                ignore: !needReset,
                name: "collapseAxisBreakBtn",
                top: 5,
                left: 5,
                shape: { r: 3, width: 160, height: 26 },
                style: {
                  fill: "#eee",
                  stroke: "#999",
                  lineWidth: 1,
                },
                textContent: {
                  type: "text",
                  style: {
                    text: "Collapse Axis Breaks",
                    fontSize: 13,
                    fontWeight: "bold",
                  },
                },
                textConfig: { position: "inside" },
              },
            ],
          },
        ],
      });
    });

    chart.on("click", (params) => {
      if (params.name === "collapseAxisBreakBtn") {
        chart.dispatchAction({
          type: "collapseAxisBreak",
          yAxisIndex: 0,
          breaks: axisBreaks,
        });
      }
    });
  }, []);

  return (
    <ReactECharts
      ref={chartRef}
      option={option}
      style={{ height: "500px", width: "100%" }}
    />
  );
};

export default Barchart;