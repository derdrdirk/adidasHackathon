import React from "react";
import { Radar, defaults } from "react-chartjs-2";
import { emotionDict } from "./util";

defaults.global.defaultFontColor = "#FFFFFF";
defaults.global.defaultFontSize = 25;
defaults.global.defaultFontFamily = "sans-serif";
defaults.global.animation.duration = 5000;

export default class RadarChart extends React.Component {
  render() {
    const { emotions } = this.props;
    console.log(emotions);
    const data = {
      labels: Object.values(emotionDict),
      datasets: [
        {
          backgroundColor: "rgba(223,105,26,0.4)",
          borderColor: "rgba(223,105,26,1)",
          pointBackgroundColor: "rgba(223,105,26,1)",
          pointBorderColor: "#ddd",
          pointHoverBackgroundColor: "#ddd",
          pointHoverBorderColor: "rgba(223,105,26,1)",
          data: emotions,
          pointBorderWidth: 1,
          pointLabelFontSize: 30
        }
      ]
    };
    return (
      <div>
        <Radar
          data={data}
          width={1}
          height={1}
          options={{
            scale: {
              ticks: {
                scaleFontSize: 100,
                display: true
              }
            },
            legend: {
              display: false
            }
          }}
        />
      </div>
    );
  }
}
