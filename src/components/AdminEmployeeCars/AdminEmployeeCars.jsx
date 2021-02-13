import React, { useState } from 'react';
import CarsModelTypes from '../CarModelTypes/CarModelTypes';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './AdminEmployeeCars.scss';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import { getCars } from '../../redux/actions/actions';

const AdminEmployeeCars = ({ loginProps, getCars }) => {
  const [isActiveHatchback, setIsActiveHatchBack] = useState(false);
  const [isActiveSedan, setIsActiveSedan] = useState(false);
  const [isActiveSuv, setIsActiveSuv] = useState(false);

  const config = {
    headers: {
      Authorization: `Bearer ${loginProps.token}`,
    },
  };

  const onClickHatchback = async () => {
    setIsActiveHatchBack(true);
    setIsActiveSedan(false);
    setIsActiveSuv(false);
    try {
      const response = await TeamDSalesAssistant.get(
        '/api/cars/hatchback',
        config
      );
      getCars(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onClickSedan = async () => {
    setIsActiveHatchBack(false);
    setIsActiveSedan(true);
    setIsActiveSuv(false);
    try {
      const response = await TeamDSalesAssistant.get('/api/cars/sedan', config);
      getCars(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onClickSuv = async () => {
    setIsActiveHatchBack(false);
    setIsActiveSedan(false);
    setIsActiveSuv(true);
    try {
      const response = await TeamDSalesAssistant.get('/api/cars/suv', config);
      getCars(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className='car-model-types'>
        <div
          className={`hatchback ${isActiveHatchback ? 'active' : ''}`}
          onClick={onClickHatchback}
        >
          Hatchback
        </div>
        <div
          className={`sedan ${isActiveSedan ? 'active' : ''}`}
          onClick={onClickSedan}
        >
          Sedan
        </div>
        <div
          className={`suv ${isActiveSuv ? 'active' : ''}`}
          onClick={onClickSuv}
        >
          SUV
        </div>
      </div>
      {isActiveHatchback || isActiveSedan || isActiveSuv ? (
        <CarsModelTypes />
      ) : null}
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCars: bindActionCreators(getCars, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminEmployeeCars);
