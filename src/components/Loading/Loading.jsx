import { Spin } from "antd";
import "./Loading.scss";
//import React from 'react';
const Loading = () => {
  return (
    <div className="loading">
      <Spin size="large" />
    </div>
  );
};

export default Loading;
