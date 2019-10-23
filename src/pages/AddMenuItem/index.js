import {
 Button, Input, InputNumber, Select,
} from 'antd';
import React, { useState } from 'react';

import './style.css';

const { Option } = Select;

const AddMenuItem = () => {
  const [item, setItem] = useState({ type: '', name: '', price: '' });

  const updateItem = (key, value) => {
    setItem({ ...item, [key]: value });
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

      <Button disabled={!isSaveButtonEnabled} type="primary" dis>Save Item</Button>
    </div>
  );
};

export default AddMenuItem;
