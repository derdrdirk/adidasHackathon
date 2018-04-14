import React, { Component } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';

const smileDict = {
  happy: '😄',
  sad: '😔',
  angry: '😡',
  confused: '😕',
  disgusted: '🤢',
  surprised: '😲',
  smile: '😊',
  calm: '😌'
};

const genderDict = {
  male: '👱',
  female: '👩'
};

class CustomTable extends Component {

  state = {
    faces: [{
      "face_id": "xxx",
      "camera_id": "xxx",
      "gender": "male",
      "age": {
        "min": 30,
        "max": 40,
      },
      "emotions": {
        "happy": 0.234,
        "sad": null,
        "angry": null,
        "confused": null,
        "disgusted": null,
        "surprised": null,
        "smile": 0.42432,
        "calm": null,
      },
      "p1": 100,
    }, {
      "face_id": "xxx",
      "camera_id": "xxx",
      "gender": "male",
      "age": {
        "min": 30,
        "max": 40,
      },
      "emotions": {
        "happy": 0.234,
        "sad": null,
        "angry": null,
        "confused": null,
        "disgusted": null,
        "surprised": null,
        "smile": 0.42432,
        "calm": null,
      },
      "p1": 100,
    }],
  }

  render() {
    const { faces } = this.state;

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
            result.push(<span>{smileDict[key]}</span>);
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
