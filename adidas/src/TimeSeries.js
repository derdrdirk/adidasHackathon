import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';

class TimeSeries extends Component {
  render() {
    const { faces } = this.props;
    console.log(faces);


    const maleData = [];
    const femaleData = [];

    for (const face of faces) {
      const timestamp = new Date(face.timestamp).getTime();
      const happy = face.emotions.happy;
      if(face.gender === 'male') {
        maleData.push({x: timestamp, y: happy});
      } else {
        femaleData.push({x: timestamp, y: happy});
      }
    }

    return (
      <div>
        <Row>
          <Col span={24}>
            <FlexibleXYPlot
              height={250}>
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
