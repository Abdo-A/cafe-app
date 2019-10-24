import { Spin } from 'antd';
import React from 'react';

import './style.css';

const LoadingIndicator = () => (
  <span className="loadingIndicator__overlay">
    <Spin size="large" color="red" tip="Loading..." />
  </span>
);

export default LoadingIndicator;
