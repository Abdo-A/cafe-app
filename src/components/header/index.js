import { Card } from 'antd';
import { useHistory } from 'react-router-dom';
import React from 'react';

import './style.css';

const Header = () => {
  const history = useHistory();

  const onClick = () => {
    history.push('/');
  };

  return (
    <Card hoverable onClick={onClick}>
      <p className="header__title">Cafe React</p>
    </Card>
    );
};

export default Header;
