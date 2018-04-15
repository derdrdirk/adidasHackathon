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



    /* for (const face of faces ) {
     *   const x = Math.round(face.*9);
     *   const y = Math.round(Math.random()*9);

     *   if (x != 2) {
     *     heatMatrix[x][y] = heatMatrix[x][y] +1;
     *   } else {
     *     heatMatrix[x][y] += 2;
     *   }
     * }



     * const data = [];
     * for (let k=0; k<9; k++) {
     *   for (let l=0; l<9; l++) {
     *     data.push({x: k, y: l, color: heatMatrix[k][l] })
     *   }
     * } */


    /* const data = [
     *   {x: 1, y: 0, color: 1},
     *   {x: 1, y: 5, color: 3},
     *   {x: 1, y: 10, color: 1},
     *   {x: 1, y: 15, color: 1},
     *   {x: 2, y: 0, color: 12},
     *   {x: 2, y: 5, color: 2},
     *   {x: 2, y: 10, color: 1},
     *   {x: 2, y: 15, color: 12},
     *   {x: 3, y: 0, color: 9},
     *   {x: 3, y: 5, color: 2},
     *   {x: 3, y: 10, color: 6},
     *   {x: 3, y: 15, color: 12}
     * ] */

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
