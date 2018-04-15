import React, { Component } from "react";
import { Table } from "antd";
import { Link } from "react-router-dom";
import { emotionDict, genderDict } from "./util.js";

class CustomTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { faces } = this.props;
    const tableFaces = faces.slice(Math.max(faces.length - 10, 1));
    const columns = [
      {
        title: "Image",
        dataIndex: "user_id",
        key: "user_id",
        render: (user_id, { image_url }) => (
          <Link to={`client/${user_id}`}>
            <img
              src={image_url}
              alt={"user" + user_id}
              style={{ height: "80px", width: "80px" }}
            />
          </Link>
        )
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
          for (const key in emotions) {
            if (emotions[key] !== null) {
              result.push(
                <span style={{ fontSize: "30px" }} key={key}>
                  {emotionDict[key]}
                </span>
              );
            }
          }
          return result;
        }
      },
      {
        title: "P1",
        dataIndex: "p1",
        key: "p1",
        render: p1 => <span>{p1}%</span>
      }
    ];

    return <Table columns={columns} dataSource={tableFaces} />;
  }
}

export default CustomTable;
