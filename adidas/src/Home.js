import React, { Component } from 'react';
import { Row, Col } from 'antd';
import CustomTable from './CustomTable.js';
import TimeSeries from './TimeSeries.js';
import 'antd/dist/antd.css';
import 'react-vis/dist/style.css';

class Home extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col span={11}>
            <Row>
              <Col span={12}>
                Image 1
              </Col>
              <Col span={12}>
                Image 2
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                Image 3
              </Col>
              <Col span={12}>
                Image 4
              </Col>
            </Row>
          </Col>
          <Col span={11}>
            <CustomTable />
          </Col>
        </Row>
        <TimeSeries />
      </div>
    );
  }
}

export default Home;
