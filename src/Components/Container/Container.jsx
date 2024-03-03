import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes from prop-types package
import './Container.scss';

const Container = ({ type, children, bg }) => {
  return (
    <div className={`container-${type}`} style={{backgroundColor: bg ? bg : undefined}}>
      {children}
    </div>
  );
};

Container.propTypes = {
  type: PropTypes.string,
  children: PropTypes.element
};

export default Container;