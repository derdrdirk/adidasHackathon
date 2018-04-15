import React, { Component } from "react";
import { Row, Col, Radio, Tabs } from "antd";
import axios from "axios";
import CustomTable from "./CustomTable.js";
import TimeSeries from "./TimeSeries.js";
import Heatmap from "./Heatmap.js";
import { emotionDict, genderDict } from "./util.js";
import "antd/dist/antd.css";
import "react-vis/dist/style.css";
import "./home.css";
const RadioGroup = Radio.Group;
const TabPane = Tabs.TabPane;

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEmotion: "happy",
      cameras: {},
      faces: []
    };
  }

  componentDidMount() {
    this.updateCameras();
    this.updateFaces();
    this.clockTimer = setInterval(() => {
      this.updateCameras();
      this.updateFaces();
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  async updateCameras() {
    const cameras = await axios
      .get("https://kiwi-adihack.herokuapp.com/get-camera-photos")
      .then(r => r.data);
    this.setState({ cameras });
  }

  async updateFaces() {
    const faces = await axios
      .get("https://kiwi-adihack.herokuapp.com/latest-records")
      .then(r => r.data);
    this.setState(prevState => ({ faces: [...prevState, ...faces] }));
  }

  onChange = e => {
    this.setState({
      selectedEmotion: e.target.value
    });
  };

  render() {
    const { selectedEmotion, faces } = this.state;

    const radioButtons = [];
    for (const emotion in emotionDict) {
      radioButtons.push(
        <Radio key={emotion} value={emotion}>
          {emotionDict[emotion]}
        </Radio>
      );
    }

    return (
      <div>
        <Row>
          <br />
          <h1 id="cameras">Cameras</h1>
          <Col span={24} style={{ marginRight: "5%" }}>
            <Tabs defaultActiveKey="1">
              <TabPane
                tab="Camera 1"
                key="1"
                style={{ "text-align": "center" }}
              >
                <img src={this.state.cameras.camera1} alt="Camera 1" />
              </TabPane>
              <TabPane
                tab="Camera 2"
                key="2"
                style={{ "text-align": "center" }}
              >
                <img src={this.state.cameras.camera2} alt="Camera 2" />
              </TabPane>
              <TabPane
                tab="Camera 3"
                key="3"
                style={{ "text-align": "center" }}
              >
                <img src={this.state.cameras.camera3} alt="Camera 3" />
              </TabPane>
              <TabPane
                tab="Cash Register"
                key="4"
                style={{ "text-align": "center" }}
              >
                <img
                  src={this.state.cameras.cashRegister}
                  alt="Cash Register"
                />
              </TabPane>
              <TabPane
                tab="Entrance"
                key="5"
                style={{ "text-align": "center" }}
              >
                <img src={this.state.cameras.entrance} alt="Entrance" />
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <br />
        <Row>
          <br />
          <h1 id="table">Client Table</h1>
          <Col span={24}>
            <CustomTable faces={faces} />
          </Col>
        </Row>
        <Row>
          <br />
          <h1 id="emotion">Emotion Timeline</h1>
          <Col span={24} style={{ textAlign: "center" }}>
            <RadioGroup
              onChange={this.onChange}
              value={this.state.selectedEmotion}
            >
              {radioButtons}
            </RadioGroup>
          </Col>
        </Row>
        <Row>
          <TimeSeries selectedEmotion={selectedEmotion} faces={faces} />
        </Row>
        <Row>
          <br />
          <h1 id="heatmap">Heatmap</h1>
          <Heatmap selectedEmotion={selectedEmotion} faces={faces} />
        </Row>
      </div>
    );
  }
}

export default Home;
