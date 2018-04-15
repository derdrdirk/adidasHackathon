import React, { Component } from 'react';
import { FlexibleXYPlot, HeatmapSeries } from 'react-vis';

class Heatmap extends Component {
  render() {
    const { faces, selectedEmtion } = this.props;

    const zeroVector = [0, 0, 0, 0, 0, 0, 0, 0 ,0, 0]
    const heatMatrix = [];
    for(var i=0; i<10; i++) {
      heatMatrix[i] = zeroVector;
    }

    /* for (let i=0; i<100; i++) {
     *   const x = Math.round(Math.random()*10)-1;
     *   const y = Math.round(Math.random()*10)-1;

       /* heatMatrix[x][y]; */


    /* const data = [];
     * for (let i=0; i<9; i++) {
     *   for (let j=0; j<9; j++) {
     *     data.push({x: i+1, y: j+1, color: heatMatrix[i][j] })
     *   }
     * } */

    const data = [
      {x: 1, y: 0, color: 10},
      {x: 1, y: 5, color: 10},
      {x: 1, y: 10, color: 6},
      {x: 1, y: 15, color: 7},
      {x: 2, y: 0, color: 12},
      {x: 2, y: 5, color: 2},
      {x: 2, y: 10, color: 1},
      {x: 2, y: 15, color: 12},
      {x: 3, y: 0, color: 9},
      {x: 3, y: 5, color: 2},
      {x: 3, y: 10, color: 6},
      {x: 3, y: 15, color: 12}
    ]

    return (
      <FlexibleXYPlot
        height={250}>
        <HeatmapSeries
          className="heatmap-series-example"
          data={data}/>
      </FlexibleXYPlot>
    );
  }
}

export default Heatmap;
