import { Button } from 'antd';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as menuItemActions from '../../store/actions/menuItemActions';
import MenuItem from './components/MenuItem';

import './style.css';

const Menu = ({
 history, allMenuItems, getAllMenuItems, deleteMenuItem,
}) => {
  useEffect(() => {
    getAllMenuItems();
  }, [getAllMenuItems]);

  const onRedirectToAddItem = () => {
    history.push('/add');
  };

  const onDeleteItem = (id) => {
    const callback = () => {
      getAllMenuItems();
    };
    deleteMenuItem(id, callback);
  };

  return (
    <div>
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
        </div>
      </div>
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
