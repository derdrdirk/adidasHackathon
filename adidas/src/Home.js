import React, { Component } from 'react';
import { Row, Col, Table, Icon, Radio } from 'antd';
import { FlexibleXYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries } from 'react-vis';
import 'antd/dist/antd.css';
import 'react-vis/dist/style.css';
const RadioGroup = Radio.Group;


class Home extends Component {
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
    const columns = [{
      title: 'Id',
      dataIndex: 'name',
      key: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    }, {
      title: 'Gender',
      dataIndex: 'age',
      key: 'gender',
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },{
      title: 'Satisfaction',
      dataIndex: 'address',
      key: 'address',
    }, {
      title: 'Urge to buy',
      key: 'action',
      render: (text, record) => (
        <span>
          <a href="javascript:;">Action 一 {record.name}</a>
        </span>
      ),
    }];

    const data = [{
      key: '1',
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
    }, {
      key: '2',
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park',
    }, {
      key: '3',
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park',
    }];

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
            <Table columns={columns} dataSource={data} />
          </Col>
        </Row>
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
    );
  }
}

export default Home;
