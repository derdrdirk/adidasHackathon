import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { emotionDict, genderDict } from "./util.js";

class CustomTable extends Component {
  render() {
    const { faces } = this.props;
    const columns = [
      {
        title: "Image",
        dataIndex: "user_id",
        key: "user_id",
        render: (user_id, { image_url }) => (
          <Link to={`/client/${user_id}`}>
            <img
              src={image_url}
              alt={"user" + user_id}
              style={{ height: "80px", width: "80px" }}
            />
          </Link>
        )
      },
      {
        title: "Camera",
        dataIndex: "camera_id",
        key: "camera_id",
        render: camera_id => <span>{camera_id}</span>
      },
      {
        title: "Gender",
        dataIndex: "gender",
        key: "gender",
        render: gender => (
          <span style={{ fontSize: "30px" }}>{genderDict[gender]}</span>
        )
      },
      {
        title: "Age",
        dataIndex: "age",
        key: "age",
        render: age => `${age.min} - ${age.max}`
      },
      {
        title: "Emotions",
        dataIndex: "emotions",
        key: "emotions",
        render: emotions => {
          const result = [];
          let counter = 0;
          for (const key in emotions) {
            counter++;
            const addLine = counter !== Object.keys(emotions).length - 1;
            if (emotions[key] !== null) {
              result.push(
                <span style={{ fontSize: "30px" }} key={key}>
                  {`${emotionDict[key]} ${Math.round(emotions[key] * 100) /
                    100} ${addLine ? "| " : ""} `}
                </span>
              );
            }
          }
          return result;
        }
      }
    ];
    return <Table columns={columns} dataSource={faces} />;
  }
}

export default CustomTable;
