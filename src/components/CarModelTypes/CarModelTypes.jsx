import React from 'react';
import AdminEmployeeCars from '../AdminEmployeeCars/AdminEmployeeCars';
import './CarModelTypes.scss';

const CarModelTypes = () => {
  return (
    <>
      <div className='car-model-types'>
        <div className='hatchback'>Hatchback</div>
        <div className='sedan'>Sedan</div>
        <div className='suv'>SUV</div>
      </div>
      <AdminEmployeeCars />
    </>
  );
};

export default CarModelTypes;
