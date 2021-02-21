import React from 'react';
import { Link } from 'react-router-dom';
import './DefaultContainer.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCardlId } from '../../redux/actions/actions';

const DefaultContainer = ({ getCardId }) => {
  return (
    <div className='default-container'>
      <h2>Welcome to Team-D Sales Assistant!</h2>
      <h1>CHOOSE YOUR MODEL BELOW</h1>

      <div className='cards'>
        <Link to='/order' className='link card' onClick={() => getCardId(1)}>
          <div className='card'>
            <h3>Hatchback</h3>
            <div className='img-hatchback'></div>
          </div>
        </Link>
        <Link to='/order' className='link card' onClick={() => getCardId(2)}>
          <div className='card'>
            <h3>Sedan</h3>
            <div className='img-sedan'></div>
          </div>
        </Link>
        <Link to='/order' className='link card' onClick={() => getCardId(3)}>
          <div className='card'>
            <h3>SUV</h3>
            <div className='img-suv'></div>
          </div>
        </Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCardId: bindActionCreators(getCardlId, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(DefaultContainer);
