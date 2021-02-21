import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import { updateCar } from '../../redux/actions/actions';
import './UpdateCar.scss';

const UpdateCar = ({ open, onClose, loginProps, editProps, updateCar }) => {
  const [carName, setCarName] = useState('');
  const [modelType, setModelType] = useState('');
  const [colorType, setColorType] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [engine, setEngine] = useState('');
  const [powerInHp, setPowerInHp] = useState('');
  const [avgConsumption, setAvgConsumption] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [orderStatus, setOrderStatus] = useState('');
  const [orderCompleteness, setOrderCompleteness] = useState('');
  // const [image, setImage] = useState('');
  const config = {
    headers: {
      Authorization: `Bearer ${loginProps.token}`,
    },
  };

  useEffect(() => {
    setCarName(editProps.Car_Name);
    setModelType(editProps.Model_Type);
    setColorType(editProps.Color_Type);
    setEquipmentType(editProps.Equipment_Type);
    setFuelType(editProps.FuelType);
    setEngine(editProps.Engine);
    setPowerInHp(editProps.PowerInHp);
    setAvgConsumption(editProps.AvgConsumption);
    setCarPrice(editProps.Car_Price);
    setOrderStatus(editProps.IsOrdered);
    setOrderCompleteness(editProps.IsOrderComplete);
  }, [editProps]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await TeamDSalesAssistant.put(
        '/api/cars',
        {
          Car_Id: editProps.Car_Id,
          Car_Name: carName,
          Model_Type: modelType,
          Color_Type: colorType,
          Equipment_Type: equipmentType,
          FuelType: fuelType,
          Engine: engine,
          PowerInHp: powerInHp,
          AvgConsumption: avgConsumption,
          Car_Price: carPrice,
          IsOrdered: orderStatus === 'true' ? true : false,
          IsOrderComplete: orderCompleteness === 'true' ? true : false,
        },
        config
      );
      console.log(response);
      updateCar(response.config.data);
    } catch (err) {
      console.error(err.message);
      alert('You have unsuccessfully updated certain car! Please try again!');
    }
    onClose();
  };

  const onChangeCarName = (e) => {
    setCarName(e.target.value);
  };

  const onChangeModelType = (e) => {
    setModelType(e.target.value);
  };

  const onChangeColorType = (e) => {
    setColorType(e.target.value);
  };

  const onChangeEquipmentType = (e) => {
    setEquipmentType(e.target.value);
  };

  const onChangeFuelType = (e) => {
    setFuelType(e.target.value);
  };

  const onChangeEngine = (e) => {
    setEngine(e.target.value);
  };

  const onChangePowerInHp = (e) => {
    setPowerInHp(e.target.value);
  };

  const onChangeAvgConsumption = (e) => {
    setAvgConsumption(e.target.value);
  };

  const onChangeCarPrice = (e) => {
    setCarPrice(e.target.value);
  };

  const onChangeOrderStatus = (e) => {
    setOrderStatus(e.target.value);
  };

  const onChangeOrderCompleteness = (e) => {
    setOrderCompleteness(e.target.value);
  };

  if (!open) return null;
  return (
    <div className='update-car-container'>
      <form className='update-car-form' onSubmit={handleSubmit}>
        <div className='update-car-card'>
          <div className='update-car-title-exit'>
            <h2 className='update-car-title'>Update</h2>
            <div className='update-car-exit' onClick={onClose}></div>
          </div>
          <div className='update-car-input-holders'>
            <input
              type='text'
              className='update-car-carname'
              placeholder='Car Name'
              onChange={onChangeCarName}
              value={carName || ''}
            />
            <input
              type='text'
              className='update-car-modeltype'
              placeholder='Model Type'
              onChange={onChangeModelType}
              value={modelType || ''}
            />
            <input
              type='text'
              className='update-car-colortype'
              placeholder='Color Type'
              onChange={onChangeColorType}
              value={colorType || ''}
            />
            <input
              type='text'
              className='update-car-equipmenttype'
              placeholder='Equipment Type'
              onChange={onChangeEquipmentType}
              value={equipmentType || ''}
            />
            <input
              type='text'
              className='update-car-fueltype'
              placeholder='Fuel Type'
              onChange={onChangeFuelType}
              value={fuelType || ''}
            />
            <input
              type='text'
              className='update-car-engine'
              placeholder='Engine'
              onChange={onChangeEngine}
              value={engine || ''}
            />
            <input
              type='text'
              className='update-car-powerinhp'
              placeholder='Power In Hp'
              onChange={onChangePowerInHp}
              value={powerInHp || ''}
            />
            <input
              type='text'
              className='update-car-avgconsumption'
              placeholder='Avg. Consumption'
              onChange={onChangeAvgConsumption}
              value={avgConsumption || ''}
            />
            <input
              type='text'
              className='update-car-carprice'
              placeholder='Car Price'
              onChange={onChangeCarPrice}
              value={carPrice || ''}
            />
            <input
              type='text'
              className='update-car-orderstatus'
              placeholder='Order Status'
              onChange={onChangeOrderStatus}
              value={orderStatus || ''}
            />
            <input
              type='text'
              className='update-car-ordercompleteness'
              placeholder='Order Completeness'
              onChange={onChangeOrderCompleteness}
              value={orderCompleteness || ''}
            />
          </div>
          <div className='update-car-btn'>
            <button type='submit' className='update-car-btn-btn'>
              Update Car
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCar: bindActionCreators(updateCar, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCar);
