import React, { Component } from "react";
import { Row, Col, Radio, Card } from "antd";
import axios from "axios";
import TimeSeries from "./TimeSeries";
import CustomTable from "./CustomTable";
import RadarChart from "./Radar";
import { emotionDict } from "./util";

const RadioGroup = Radio.Group;
const { Meta } = Card;

class Client extends Component {
  state = {
    imageUrl: "",
    faces: [],
    recomendations: {}
  };

  async componentDidMount() {
    const clientId = this.props.match.params.id;
    const faces = await axios
      .get(
        "https://kiwi-adihack.herokuapp.com/last-info?limit=8&user_id=" +
          clientId
      )
      .then(r => r.data);
    const { gender, age, image_url: imageUrl } = faces && faces[0];
    const ageAvarage = age && Math.floor((age.min + age.max) / 2);
    const recomendations = await axios
      .get(
        `https://kiwi-adihack.herokuapp.com/recommend?age=${ageAvarage}&gender=${gender}`
      )
      .then(r => r.data);
    this.setState({
      faces,
      imageUrl,
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

  render() {
    const clientId = this.props.match.params.id;
    const {
      imageUrl,
      faces = [],
      selectedEmotion,
      recomendations
    } = this.state;
    const { accuracy, product } = recomendations;
    const face = faces[faces.length - 1];
    const emotions = face && face.emotions && Object.values(face.emotions);
    const parsedEmotions =
      emotions &&
      emotions.map(
        emotion => (emotion === null || emotion <= 10 ? 10 : emotion)
      );
    let url = "";
    switch (product) {
      case "BR6930":
        url =
          "https://m.adidas.es/zapatilla-pharrell-williams-tennis-hu/BY8714.html?cgid=SEARCH";
        break;
      case "CV9889":
        url = "https://m.adidas.es/camiseta-trefoil/CV9889.html?cgid=SEARCH";
        break;
      case "BY8745":
        url =
          "https://m.adidas.es/zapatilla-pharrell-williams-tennis-hu/BY8714.html?cgid=SEARCH";
        break;
      default:
        url = "https://www.adidas.es/";
        break;
    }
    return (
      <React.Fragment>
        <Row>
          <Col span={7}>
            <Card
              hoverable
              style={{ width: 350, marginLeft: "15%" }}
              cover={<img alt="profile" src={imageUrl} />}
            >
              <Meta title="ClientId:" description={clientId} />
              <a href={url} target="_blank">
                <Meta title="Product:" description={product} />
              </a>
              <Meta title="Accuracy:" description={accuracy} />
            </Card>
          </Col>
          <Col span={8} style={{ float: "right", marginRight: "15%" }}>
            {emotions && <RadarChart emotions={parsedEmotions} />}
          </Col>
        </Row>
        <br />
        <CustomTable selectedEmotion={selectedEmotion} faces={faces} />
      </React.Fragment>
    );
  }
}

export default Client;
