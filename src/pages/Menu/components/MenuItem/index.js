import PropTypes from 'prop-types';
import React from 'react';

import './style.css';
import ImagePlaceholder from '../../../../assets/images/image-placeholder.jpg';

const MenuItem = ({
  item: { name = 'Meal name', type = 'Meal type', price = 10 }, onDelete,
}) => (
  <div className="menuItem__container">
    <div className="menuItem__imgContainer">
      <img src={ImagePlaceholder} className="menuItem__img" alt="menu item" />
      <span onClick={onDelete} className="menuItem__removeIcon" role="img" aria-label="remove">❌</span>
    </div>
    <div className="menuItem__infoContainer">
      <div className="menuItem__infoInnerContainer">
        <p className="menuItem__type">{type}</p>
        <p className="menuItem__name">{name}</p>
      </div>
      <p className="menuItem__price">{`$${price}`}</p>
    </div>
  </div>
);

MenuItem.propTypes = {
  item: PropTypes.objectOf(PropTypes.any).isRequired,
  onDelete: PropTypes.func,
};

MenuItem.defaultProps = {
  onDelete: () => null,
};

export default MenuItem;
