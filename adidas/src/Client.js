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
    recomendations: [],
    selectedEmotion: "happy"
  };

  async componentDidMount() {
    const clientId = this.props.match.params.id;
    const faces = await axios
      .get(
        "https://kiwi-adihack.herokuapp.com/last-info?limit=8&user_id=" +
          clientId
      )
      .then(r => r.data);
    //console.log(faces);
    const { gender, age, image_url: imageUrl } = faces && faces[0];
    //const ageAvarage = age && Math.floor((age.min + age.max) / 2);
    // const recomendations = await axios
    //   .post("https://kiwi-adihack.herokuapp.com/recommend", {
    //     age: ageAvarage,
    //     gender
    //   })
    //   .then(r => r.data);
    this.setState({
      faces,
      imageUrl
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
    const { imageUrl, faces = [], selectedEmotion } = this.state;
    const face = faces[faces.length - 1];
    const emotions = face && face.emotions && Object.values(face.emotions);
    const parsedEmotions =
      emotions &&
      emotions.map(
        emotion => (emotion === null || emotion <= 10 ? 10 : emotion)
      );
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
