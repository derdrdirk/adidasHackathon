import React, { Component } from "react";
import { Row, Col, Radio } from "antd";
import axios from "axios";
import CustomTable from "./CustomTable.js";
import TimeSeries from "./TimeSeries.js";
import Heatmap from "./Heatmap.js";
import { emotionDict, genderDict } from "./util.js";
import "antd/dist/antd.css";
import "react-vis/dist/style.css";
import "./home.css";
const RadioGroup = Radio.Group;

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
    this.clockTimer = setInterval(() => {
      this.updateCameras();
      this.updateFaces();
    }, 4000);
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  async updateCameras() {
    const { cameras } = await axios.get("/").then(r => r.data);
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
          <Col span={10} style={{ marginRight: "5%" }}>
            <div style={{ height: "160px" }}>
              <h4>Camera 1</h4>
              <img
                src="http://www.adidas.es/static/on/demandware.static/-/Sites-adidas-ES-Library/default/dw439383d6/help/ico-company.png"
                alt="Camera 1"
              />
            </div>
            <br/>
            <div style={{ height: "160px" }}>
              <h4>Camera 2</h4>
              <img
                src="http://www.adidas.es/static/on/demandware.static/-/Sites-adidas-ES-Library/default/dw439383d6/help/ico-company.png"
                alt="Camera 2"
              />
            </div>
            <br/>
            <div style={{ height: "160px" }}>
              <h4>Camera 3</h4>
              <img
                src="http://www.adidas.es/static/on/demandware.static/-/Sites-adidas-ES-Library/default/dw439383d6/help/ico-company.png"
                alt="Camera 3"
              />
            </div>
            <br/>
            <div style={{ height: "160px" }}>
              <h4>Camera 4</h4>
              <img
                src="http://www.adidas.es/static/on/demandware.static/-/Sites-adidas-ES-Library/default/dw439383d6/help/ico-company.png"
                alt="Camera 4"
              />
            </div>
            <br/>
            <div style={{ height: "160px" }}>
              <h4>Camera 5</h4>
              <img
                src="http://www.adidas.es/static/on/demandware.static/-/Sites-adidas-ES-Library/default/dw439383d6/help/ico-company.png"
                alt="Camera 5"
              />
            </div>
            <br/>
          </Col>
          <Col span={11}>
            <CustomTable faces={faces} />
          </Col>
        </Row>
        <br />
        <Row>
          <Col span={24} style={{ textAlign: "center" }}>
            <RadioGroup
              onChange={this.onChange}
              value={this.state.selectedEmotion}
            >
              {radioButtons}
            </RadioGroup>
          </Col>
        </Row>
        <TimeSeries selectedEmotion={selectedEmotion} faces={faces} />
        <Heatmap selectedEmotion={selectedEmotion} faces={faces} />
      </div>
    );
  }
}

export default Home;
