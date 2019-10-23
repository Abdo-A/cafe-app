import React from 'react';

import './style.css';
import ImagePlaceholder from '../../../../assets/images/image-placeholder.jpg';

const MenuItem = () => (
  <div
    className="menuItem__container"
  >
    <img
      alt="menu item"
      src={ImagePlaceholder}
      className="menuItem__img"
    />
    <div className="menuItem__infoContainer" />
  </div>
);

export default MenuItem;
