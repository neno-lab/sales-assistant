import React, { useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import { addCar } from '../../redux/actions/actions';
import './AddCar.scss';

const AddCar = ({ open, onClose, loginProps, addCar }) => {
  const [carName, setCarName] = useState('');
  const [modelType, setModelType] = useState('');
  const [colorType, setColorType] = useState('');
  const [equipmentType, setEquipmentType] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [engine, setEngine] = useState('');
  const [powerInHp, setPowerInHp] = useState('');
  const [avgConsumption, setAvgConsumption] = useState('');
  const [carPrice, setCarPrice] = useState('');
  const [orderStatus, setOrderStatus] = useState(false);
  const [orderCompleteness, setOrderCompleteness] = useState(false);
  // const [image, setImage] = useState('');
  const config = {
    headers: {
      Authorization: `Bearer ${loginProps.token}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await TeamDSalesAssistant.post(
        '/api/cars',
        {
          Car_Name: carName,
          Model_Type: modelType,
          Color_Type: colorType,
          Equipment_Type: equipmentType,
          FuelType: fuelType,
          Engine: engine,
          PowerInHp: powerInHp,
          AvgConsumption: avgConsumption,
          Car_Price: carPrice,
          IsOrdered: orderStatus,
          IsOrderCompleted: orderCompleteness,
        },
        config
      );
      console.log(response);
      addCar(response.data);
    } catch (err) {
      console.error(err.message);
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
    <div className='add-car-container'>
      <form className='add-car-form' onSubmit={handleSubmit}>
        <div className='add-car-card'>
          <div className='add-car-title-exit'>
            <h2 className='add-car-title'>Add Car</h2>
            <div className='add-car-exit' onClick={onClose}></div>
          </div>
          <div className='add-car-input-holders'>
            <input
              type='text'
              className='add-car-carname'
              placeholder='Car Name'
              onChange={onChangeCarName}
              value={carName}
            />
            <input
              type='text'
              className='add-car-modeltype'
              placeholder='Model Type'
              onChange={onChangeModelType}
              value={modelType}
            />
            <input
              type='text'
              className='add-car-colortype'
              placeholder='Color Type'
              onChange={onChangeColorType}
              value={colorType}
            />
            <input
              type='text'
              className='add-car-equipmenttype'
              placeholder='Equipment Type'
              onChange={onChangeEquipmentType}
              value={equipmentType}
            />
            <input
              type='text'
              className='add-car-fueltype'
              placeholder='Fuel Type'
              onChange={onChangeFuelType}
              value={fuelType}
            />
            <input
              type='text'
              className='add-car-engine'
              placeholder='Engine'
              onChange={onChangeEngine}
              value={engine}
            />
            <input
              type='text'
              className='add-car-powerinhp'
              placeholder='Power In Hp'
              onChange={onChangePowerInHp}
              value={powerInHp}
            />
            <input
              type='text'
              className='add-car-avgconsumption'
              placeholder='Avg. Consumption'
              onChange={onChangeAvgConsumption}
              value={avgConsumption}
            />
            <input
              type='text'
              className='add-car-carprice'
              placeholder='Car Price'
              onChange={onChangeCarPrice}
              value={carPrice}
            />
            <input
              type='text'
              className='add-car-orderstatus'
              placeholder='Order Status'
              onChange={onChangeOrderStatus}
              value={orderStatus}
            />
            <input
              type='text'
              className='add-car-ordercompleteness'
              placeholder='Order Completeness'
              onChange={onChangeOrderCompleteness}
              value={orderCompleteness}
            />
          </div>
          <div className='add-car-btn'>
            <button type='submit' className='add-car-btn-btn'>
              Add Car
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
    addCar: bindActionCreators(addCar, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCar);
