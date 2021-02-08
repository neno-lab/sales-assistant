import React from 'react';
import AdminEmployeeCars from '../AdminEmployeeCars/AdminEmployeeCars';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './CarModelTypes.scss';
import {
  getAllHatchbacks,
  getAllSedans,
  getAllSuvs,
} from '../../redux/actions/actions';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';

const CarModelTypes = ({
  loginProps,
  getAllHatchbacks,
  getAllSedans,
  getAllSuvs,
}) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loginProps.token}`,
    },
  };

  const onClickHatchback = async () => {
    try {
      const response = await TeamDSalesAssistant.get(
        '/api/cars/hatchback',
        config
      );
      getAllHatchbacks(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onClickSedan = async () => {
    try {
      const response = await TeamDSalesAssistant.get('/api/cars/sedan', config);
      getAllSedans(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  const onClickSuv = async () => {
    try {
      const response = await TeamDSalesAssistant.get('/api/cars/suv', config);
      getAllSuvs(response.data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className='car-model-types'>
        <div className='hatchback' onClick={onClickHatchback}>
          Hatchback
        </div>
        <div className='sedan' onClick={onClickSedan}>
          Sedan
        </div>
        <div className='suv' onClick={onClickSuv}>
          SUV
        </div>
      </div>
      <AdminEmployeeCars />
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
    getAllHatchbacks: bindActionCreators(getAllHatchbacks, dispatch),
    getAllSedans: bindActionCreators(getAllSedans, dispatch),
    getAllSuvs: bindActionCreators(getAllSuvs, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarModelTypes);
