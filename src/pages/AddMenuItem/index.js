import {
 Button, Input, InputNumber, Select,
} from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ReactFilestack from 'filestack-react';

import * as menuItemActions from '../../store/actions/menuItemActions';

import './style.css';
import keys from '../../keys.ignore';

const { Option } = Select;

const AddMenuItem = ({ history, createMenuItem, setError }) => {
  const [item, setItem] = useState({
    type: '',
    name: '',
    price: '',
    photoUrl: '',
  });

  const updateItem = (key, value) => {
    setItem({ ...item, [key]: value });
  };

  const handleSaveItem = () => {
    const callback = () => {
      history.push('/');
    };
    createMenuItem(item, callback);
  };

  const handleImageUploadSuccess = (result) => {
    updateItem('photoUrl', result.filesUploaded[0].url);
  };

  const handleImageUploadError = () => {
    setError('Error while uploading photo, please try again.');
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

      <div>
        <ReactFilestack
          apikey={keys.filestackKey}
          buttonClass="ui medium button gray"
          onSuccess={handleImageUploadSuccess}
          onError={handleImageUploadError}
          componentDisplayMode={{
            customText: 'Choose Menu Item Photo',
          }}
        />
      </div>

      {item.photoUrl && (
        <div>
          <img src={item.photoUrl} alt="item" className="addMenuItem__img" />
        </div>
      )}

      <Button
        onClick={handleSaveItem}
        disabled={!isSaveButtonEnabled}
        className="addMenuItem__saveButton"
        type="primary"
        dis
      >
        Save Item
      </Button>
    </div>
  );
};

AddMenuItem.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,

  createMenuItem: PropTypes.func,

  setError: PropTypes.func,
};

AddMenuItem.defaultProps = {
  createMenuItem: () => null,

  setError: () => null,
};

const mapDispatchToProps = {
  createMenuItem: menuItemActions.createMenuItem,
  setError: menuItemActions.setError,
};

export default connect(
  null,
  mapDispatchToProps,
)(AddMenuItem);
