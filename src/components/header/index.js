import { Card, notification } from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as menuItemActions from '../../store/actions/menuItemActions';

import './style.css';

const Header = ({
 error, info, setError, setInfo,
}) => {
  useEffect(() => {
    // Handle showing info
    if (info) {
      notification.success({ message: info, duration: 2 });
      setInfo('');
    }

    // Handle showing error
    if (error) {
      notification.error({ message: error, duration: 2 });
      setError('');
    }
  }, [error, info, setError, setInfo]);

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

Header.propTypes = {
  error: PropTypes.string,
  info: PropTypes.string,
  setError: PropTypes.func,
  setInfo: PropTypes.func,
};

Header.defaultProps = {
  error: '',
  info: '',
  setError: () => null,
  setInfo: () => null,
};


const mapStateToProps = (state) => ({
  error: state.menuItem.error,
  info: state.menuItem.info,
});

const mapDispatchToProps = {
  setError: menuItemActions.setError,
  setInfo: menuItemActions.setInfo,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);
