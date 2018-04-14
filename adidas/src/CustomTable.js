import React, { Component } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import { emotionDict, genderDict } from './util.js';

class CustomTable extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { faces } = this.props;

    const columns = [{
      title: 'Id',
      dataIndex: 'face_id',
      key: 'face_id',
      render: face_id => <Link to={`client/${face_id}`}>{face_id}</Link>,
    }, {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
      render: gender => genderDict[gender],
    }, {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
      render: age => `${age.min} - ${age.max}`
    },{
      title: 'Emotions',
      dataIndex: 'emotions',
      key: 'emotions',
      render: (emotions) => {
        const result = [];
        for( const key in emotions ) {
          if(emotions[key] !== null) {
            result.push(<span key={key}>{emotionDict[key]}</span>);
          }
        }
        return result;
      }
    }, {
      title: 'P1',
      dataIndex: 'p1',
      key: 'p1',
      render: (p1) => (
        <span>{p1}%</span>
      ),
    }];

    return (
      <Table columns={columns} dataSource={faces} />
    );
  }
}

export default CustomTable;
