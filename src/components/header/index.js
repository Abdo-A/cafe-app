import { Card, notification } from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';

import * as menuItemActions from '../../store/actions/menuItemActions';
import LoadingIndicator from '../LoadingIndicator';

import './style.css';

const Header = ({
  isLoading, error, info, setError, setInfo,
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
      {
        isLoading && <LoadingIndicator />
      }
    </Card>
    );
};

Header.propTypes = {
  isLoading: PropTypes.bool,

  error: PropTypes.string,
  info: PropTypes.string,

  setError: PropTypes.func,
  setInfo: PropTypes.func,
};

Header.defaultProps = {
  isLoading: false,

  error: '',
  info: '',

  setError: () => null,
  setInfo: () => null,
};


const mapStateToProps = (state) => ({
  isLoading: state.menuItem.isLoading,

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
