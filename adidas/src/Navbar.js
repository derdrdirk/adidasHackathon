import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

const Navbar = () => (
  <Menu
    mode="horizontal"
    style={{
      position: "fixed",
      width: "100%",
      top: "0",
      marginBottom: "20px",
      zIndex: "1"
    }}
  >
      <Menu.Item>
        <Link to="/" >
          <Icon type="home" /> Home
        </Link>
      </Menu.Item>
    <Menu.Item>
      <a href="#cameras">
        <Icon type="camera-o" />Cameras
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#table">
        <Icon type="bars" /> Client Table
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#emotion">
        <Icon type="line-chart" /> Emotion Timeline
      </a>
    </Menu.Item>
    <Menu.Item>
      <a href="#heatmap">
        <Icon type="qrcode" /> Heatmap
      </a>
    </Menu.Item>
  </Menu>
);

export default Navbar;
