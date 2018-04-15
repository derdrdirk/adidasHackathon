import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';

class TimeSeries extends Component {
  render() {
    const { faces, selectedEmotion } = this.props;

    const maleData = [];
    const femaleData = [];

    for (const face of faces) {
      const timestamp = new Date(face.timestamp).getTime();
      const emotion = face.emotions[selectedEmotion];
      if(face.gender === 'male') {
        maleData.push({x: timestamp, y: emotion});
      } else {
        femaleData.push({x: timestamp, y: emotion});
      }
    }

    return (
      <div>
        <Row>
          <Col span={24}>
            <FlexibleXYPlot
              height={350}>
              <HorizontalGridLines />
              <LineSeries
                data={maleData}/>
              <XAxis />
              <LineSeries
                data={femaleData}/>
              <XAxis />
              <YAxis />
            </FlexibleXYPlot>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TimeSeries;
