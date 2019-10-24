import { Button, Modal } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

import * as menuItemActions from '../../store/actions/menuItemActions';
import MenuItem from './components/MenuItem';

import './style.css';

const Menu = ({
 history, allMenuItems, getAllMenuItems, deleteMenuItem,
}) => {
  const [itemToBeDeletedId, setItemToBeDeletedId] = useState(false);
  const [deleteItemModalVisible, setDeleteItemModalVisible] = useState(false);

  useEffect(() => {
    getAllMenuItems();
  }, [getAllMenuItems]);

  const onRedirectToAddItem = () => {
    history.push('/add');
  };

  const onDeleteItem = (id) => {
    setDeleteItemModalVisible(true);
    setItemToBeDeletedId(id);
  };

  const onConfirmDeleteItem = () => {
    setDeleteItemModalVisible(false);

    if (!itemToBeDeletedId) return;
    const callback = () => {
      getAllMenuItems();
      setItemToBeDeletedId('');
    };
    deleteMenuItem(itemToBeDeletedId, callback);
  };

  return (
    <div>
      <div className="menu__upperRowContainer">
        <p className="menu__upperRowContainer__identifier">Menu</p>
        <Button onClick={onRedirectToAddItem} type="primary">Add menu item</Button>
      </div>
      <div className="menu__itemsContainer">
        {
            allMenuItems.map(({ _id: id, ...item }) => (
              <MenuItem key={id} item={item} const onDelete={() => onDeleteItem(id)} />
            ))
          }
        {
            allMenuItems.length === 0 && <p className="menu__noItemsHint">You haven&apos;t added any Menu Items yet</p>
          }
      </div>
      <Modal
        visible={deleteItemModalVisible}
        onOk={onConfirmDeleteItem}
        onCancel={() => setDeleteItemModalVisible(false)}
      >
        <h3>Are you sure you want to delete this item?</h3>
      </Modal>
    </div>
  );
};

Menu.propTypes = {
  history: PropTypes.objectOf(PropTypes.any).isRequired,
  allMenuItems: PropTypes.arrayOf(PropTypes.shape({})),

  getAllMenuItems: PropTypes.func,
  deleteMenuItem: PropTypes.func,
};

Menu.defaultProps = {
  allMenuItems: [],
  getAllMenuItems: () => null,
  deleteMenuItem: () => null,
};


const mapStateToProps = (state) => ({
  allMenuItems: state.menuItem.allMenuItems,
});


const mapDispatchToProps = {
  getAllMenuItems: menuItemActions.getAllMenuItems,
  deleteMenuItem: menuItemActions.deleteMenuItem,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Menu);
