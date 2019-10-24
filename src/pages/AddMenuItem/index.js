import {
 Button, Input, InputNumber, Select,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

import * as menuItemActions from '../../store/actions/menuItemActions';

import './style.css';

const { Option } = Select;

const AddMenuItem = ({ history, createMenuItem }) => {
  const [item, setItem] = useState({ type: '', name: '', price: '' });

  const updateItem = (key, value) => {
    setItem({ ...item, [key]: value });
  };

  const handleSaveItem = () => {
    const callback = () => {
      history.push('/');
    };
    createMenuItem(item, callback);
  };

  // Check that all inputs are filled by user
  const isSaveButtonEnabled = Object.values(item).every(Boolean);

  return (
    <div className="addMenuItem__container">
      <p className="addMenuItem__title">Add Menu Item</p>

      <div className="addMenuItem__inputContainer">
        <p className="addMenuItem__inputLabel">Type</p>
        <Select
          className="addMenuItem__inputBody"
          placeholder="Main Course / Side"
          onChange={(value) => updateItem('type', value)}
        >
          <Option value="Main Course">Main Course</Option>
          <Option value="Side">Side</Option>
        </Select>
      </div>

      <div className="addMenuItem__inputContainer">
        <p className="addMenuItem__inputLabel">Name</p>
        <Input
          className="addMenuItem__inputBody"
          placeholder="Item Name"
          onChange={(e) => updateItem('name', e.target.value)}
        />
      </div>

      <div className="addMenuItem__inputContainer">
        <p className="addMenuItem__inputLabel">Price</p>
        <InputNumber
          className="addMenuItem__inputBody"
          placeholder="Item Price"
          onChange={(num) => updateItem('price', num)}
          type="number"
        />
      </div>

      <Button onClick={handleSaveItem} disabled={!isSaveButtonEnabled} type="primary" dis>Save Item</Button>
    </div>
  );
};


AddMenuItem.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,

  createMenuItem: PropTypes.func,
};

AddMenuItem.defaultProps = {
  createMenuItem: () => null,
};

const mapDispatchToProps = {
  createMenuItem: menuItemActions.createMenuItem,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddMenuItem);
