import React, { useState } from 'react';
import './AddCar.scss';

const AddCar = ({ open, onClose }) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('tu sammm');

    console.log(carName);
    console.log(modelType);
    console.log(colorType);
    console.log(equipmentType);
    console.log(fuelType);
    console.log(engine);
    console.log(powerInHp);
    console.log(avgConsumption);
    console.log(carPrice);
    console.log(orderStatus);
    console.log(orderCompleteness);
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

export default AddCar;
