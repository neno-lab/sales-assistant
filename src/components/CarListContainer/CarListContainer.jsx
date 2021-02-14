import React from 'react';
import './CarListContainer.scss';

const CarListContainer = () => {
  return (
    <div className='car-list-container'>
      <div className='card'>
        <figure className='front'>
          <h1>sprida</h1> <p>Lorem, ipsum dolor.</p>
        </figure>
        <figure className='back'>
          <h1>zada</h1> <button>kupi</button>
        </figure>
      </div>
      {/* <ul>
        <li>
          <i className='fas fa-car-side fa-5x'></i>
          <h3>Lorem, ipsum dolor.</h3>
        </li>
        <li>
          <i className='fas fa-car-side fa-5x'></i>
          <h3>Lorem, ipsum dolor.</h3>
        </li>
        <li>
          <i className='fas fa-car-side fa-5x'></i>
          <h3>Lorem, ipsum dolor.</h3>
        </li>
        <li>
          <i className='fas fa-car-side fa-5x'></i>
          <h3>Lorem, ipsum dolor.</h3>
        </li>
        <li>
          <i className='fas fa-car-side fa-5x'></i>
          <h3>Lorem, ipsum dolor.</h3>
        </li>
        <li>
          <i className='fas fa-car-side fa-5x'></i>
          <h3>Lorem, ipsum dolor.</h3>
        </li>
        <li>
          <i className='fas fa-car-side fa-5x'></i>
          <h3>Lorem, ipsum dolor.</h3>
        </li>
        <li>
          <i className='fas fa-car-side fa-5x'></i>
          <h3>Lorem, ipsum dolor.</h3>
        </li>
      </ul> */}
    </div>
  );
};

export default CarListContainer;
