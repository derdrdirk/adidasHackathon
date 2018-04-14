import React, { Component } from 'react';
import { Row, Col, Radio } from 'antd';
import CustomTable from './CustomTable.js';
import TimeSeries from './TimeSeries.js';
import Heatmap from './Heatmap.js';
import { emotionDict, genderDict } from './util.js';
import 'antd/dist/antd.css';
import 'react-vis/dist/style.css';
const RadioGroup = Radio.Group;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEmotion: 'happy',
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
  }

  onChange = (e) => {
    this.setState({
      selectedEmotion: e.target.value,
    });
  }

  render() {
    const { selectedEmotion, faces } = this.state;

    const radioButtons = [];
    for (const emotion in emotionDict) {
      radioButtons.push(<Radio key={emotion} value={emotion}>{emotionDict[emotion]}</Radio>);
    }

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
            <CustomTable faces={faces} />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{textAlign: 'center'}}>
            <RadioGroup onChange={this.onChange} value={this.state.selectedEmotion}>
              {radioButtons}
            </RadioGroup>
          </Col>
        </Row>
        <TimeSeries selectedEmotion={selectedEmotion} faces={faces} />
        <Heatmap selectedEmotion={selectedEmotion}  faces={faces} />
      </div>
    );
  }
}

export default Home;
