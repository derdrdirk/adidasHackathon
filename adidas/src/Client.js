import React, { Component } from "react";
import { Row, Col, Radio, Card } from "antd";
import axios from "axios";
import TimeSeries from "./TimeSeries";
import CustomTable from "./CustomTable";
import { emotionDict } from "./util";

const RadioGroup = Radio.Group;
const { Meta } = Card;

class Client extends Component {
  state = {
    imageUrl:
      "http://www.adidas.es/static/on/demandware.static/-/Sites-adidas-ES-Library/default/dw439383d6/help/ico-company.png",
    face: {},
    recomendations: [],
    selectedEmotion: "happy"
  };

  async componentDidMount() {
    const response = await axios.get("/").then(r => r.data);
    const { gender, age } = response;
    const ageAvarage = age && Math.floor((age.min + age.max) / 2);
    const recomendations = await axios
      .post("https://kiwi-adihack.herokuapp.com/api/recommend", {
        age: ageAvarage,
        gender
      })
      .then(r => r.data);
    this.setState({
      response,
      recomendations
    });
  }

  renderEmoticons = () => {
    const radioButtons = [];
    for (const emotion in emotionDict) {
      radioButtons.push(
        <Radio key={emotion} value={emotion}>
          {emotionDict[emotion]}
        </Radio>
      );
    }
    return radioButtons;
  };

  onChange = e => {
    this.setState({
      selectedEmotion: e.target.value
    });
  };

  render() {
    const clientId = this.props.match.params.id;
    const { imageUrl } = this.state;
    return (
      <React.Fragment>
        <Row>
          <Col span={7}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={<img alt="profile" src={imageUrl} />}
            >
              <Meta title="ClientId:" description={clientId} />
            </Card>
          </Col>
          <Col span={14}>
            <TimeSeries />
            <div style={{ "text-align": "center" }}>
              <RadioGroup
                onChange={this.onChange}
                value={this.state.selectedEmotion}
              >
                {this.renderEmoticons()}
              </RadioGroup>
            </div>
          </Col>
        </Row>
        <br />
        <CustomTable />
      </React.Fragment>
    );
  }
}

export default Client;
