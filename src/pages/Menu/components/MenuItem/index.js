import PropTypes from 'prop-types';
import React from 'react';

import './style.css';
import ImagePlaceholder from '../../../../assets/images/image-placeholder.jpg';

const MenuItem = ({
  item: { name = 'Meal name', type = 'Meal type', price = 10 },
}) => (
  <div className="menuItem__container">
    <img alt="menu item" src={ImagePlaceholder} className="menuItem__img" />
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
};

export default MenuItem;
