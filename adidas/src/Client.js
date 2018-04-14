import React, { Component } from "react";
import { Row, Col } from "antd";
import { Card } from "antd";
import TimeSeries from "./TimeSeries";
import CustomTable from "./CustomTable";
import "./Client.css";

const { Meta } = Card;

class Client extends Component {
  state = {
    imageUrl:
      "http://www.adidas.es/static/on/demandware.static/-/Sites-adidas-ES-Library/default/dw439383d6/help/ico-company.png",
    data: []
  };

  componentDidMount() {
    // fetch data
  }

  render() {
    const clientId = this.props.match.params.id;
    const { imageUrl } = this.state;
    return (
      <React.Fragment>
        <div className="wrapper">
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
            </Col>
          </Row>
          <br/>
          <CustomTable />
        </div>
      </React.Fragment>
    );
  }
}

export default Client;
