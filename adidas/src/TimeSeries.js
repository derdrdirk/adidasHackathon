import React, { Component } from 'react';
import { Row, Col, Icon, Radio } from 'antd';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';
const RadioGroup = Radio.Group;

class TimeSeries extends Component {
  state = {
    value: 1,
  }

  onChange = (e) => {
    console.log('radio checked', e.target.value);
    this.setState({
      value: e.target.value,
    });
  }

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
        <Row>
          <Col span={24} style={{textAlign: 'center'}}>
            <RadioGroup onChange={this.onChange} value={this.state.value}>
              <Radio value={1}>Age</Radio>
              <Radio value={2}>Satisfaction</Radio>
              <Radio value={3}>UrgeToBuy</Radio>
            </RadioGroup>
          </Col>
        </Row>
      </div>
    )
  }
}

export default TimeSeries;
