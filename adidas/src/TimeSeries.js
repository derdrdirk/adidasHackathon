import React, { Component } from 'react';
import { Row, Col, Icon } from 'antd';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';

class TimeSeries extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={24}>
            <FlexibleXYPlot
              height={250}>
              <HorizontalGridLines />
              <LineSeries
                data={[
                  {x: 1, y: 10},
                  {x: 2, y: 5},
                  {x: 3, y: 15}
                ]}/>
              <LineSeries
                data={[
                  {x: 1, y: 5},
                  {x: 2, y: 10},
                  {x: 3, y: 15}
                ]}/>
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
