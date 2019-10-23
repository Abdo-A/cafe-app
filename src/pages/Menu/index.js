import { Button } from 'antd';
import PropTypes from 'prop-types';
import React from 'react';

import MenuItem from './components/MenuItem';

import './style.css';

const Menu = ({ history }) => {
  const onRedirectToAddItem = () => {
    history.push('/add');
  };
  return (
    <div>
      <div>
        <div className="menu__upperRowContainer">
          <p className="menu__upperRowContainer__identifier">Menu</p>
          <Button onClick={onRedirectToAddItem} type="primary">Add menu item</Button>
        </div>
        <div className="menu__itemsContainer">
          <MenuItem item={{}} />
          <MenuItem item={{}} />
          <MenuItem item={{}} />
          <MenuItem item={{}} />
          <MenuItem item={{}} />
          <MenuItem item={{}} />
        </div>
      </div>
    </div>
  );
};

Menu.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
};


export default Menu;
