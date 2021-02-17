import React, { useEffect } from 'react';
import hatchback from '../../assests/hatchback-model.png';
import sedan from '../../assests/sedan-model.png';
import suv from '../../assests/suv-model.png';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import './CarListContainer.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getCars } from '../../redux/actions/actions';

const CarListContainer = ({ cardId, carsList, getCars }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (cardId === 1) {
          const responseHatchbacks = await TeamDSalesAssistant.get(
            '/api/cars/hatchback'
          );
          getCars(responseHatchbacks.data);
        } else if (cardId === 2) {
          const responseSedans = await TeamDSalesAssistant.get(
            '/api/cars/sedan'
          );
          getCars(responseSedans.data);
        } else {
          const responseSuvs = await TeamDSalesAssistant.get('/api/cars/suv');
          getCars(responseSuvs.data);
        }
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [cardId, getCars]);

  return (
    <div className='car-list-container'>
      {cardId === 1 ? <h1 className='car-title'>Hatchbacks</h1> : null}
      {cardId === 2 ? <h1 className='car-title'>Sedans</h1> : null}
      {cardId === 3 ? <h1 className='car-title'>Suvs</h1> : null}
      <div className='wrap'>
        {carsList.map((car) => (
          <div className='card' key={car.Car_Id}>
            <figure className='front'>
              {cardId === 1 ? (
                <img src={hatchback} alt='Model' className='car-image' />
              ) : null}
              {cardId === 2 ? (
                <img src={sedan} alt='Model' className='car-image' />
              ) : null}
              {cardId === 3 ? (
                <img src={suv} alt='Model' className='car-image' />
              ) : null}
              <div className='car-name'>
                <h4 className='brand-name'>{car.Car_Name.slice(0, 5)}</h4>
                <p className='model-name'>
                  {car.Car_Name.slice(6, car.Car_Name.length)}
                </p>
              </div>
            </figure>
            <figure className='back'>
              <p className='desc'>{car.Color_Type}</p>
              <p className='desc'>{car.Equipment_Type}</p>
              <p className='desc'>{car.FuelType}</p>
              <p className='desc'>{car.Engine}</p>
              <p className='desc'>{car.PowerInHp}</p>
              <p className='desc'>{car.AvgConsumption}</p>
              <p className='desc'>{car.Car_Price}&euro;</p>
              <button className='buy'>Buy</button>
            </figure>
          </div>
        ))}
      </div>
      {/* <div className='wrap'>
        <div className='card'>
          <figure className='front'>
            <img src={hatchback} alt='Model' className='car-image' />
            <div className='car-name'>
              <h4 className='brand-name'>TeamD</h4>
              <p className='model-name'>Raptor</p>
            </div>
          </figure>
          <figure className='back'>
            <p className='desc'>Vanta_Black</p>
            <p className='desc'>Sport</p>
            <p className='desc'>Petrol</p>
            <p className='desc'>1.4 T-GDI</p>
            <p className='desc'>150 HP</p>
            <p className='desc'>6.5 L/100km</p>
            <p className='desc'>28000</p>
            <button className='buy'>Buy</button>
          </figure>
        </div>
        <div className='card'>
          <figure className='front'>
            <img src={hatchback} alt='Model' className='car-image' />
            <div className='car-name'>
              <h4 className='brand-name'>TeamD</h4>
              <p className='model-name'>Raptor</p>
            </div>
          </figure>
          <figure className='back'>
            <p className='desc'>Vanta_Black</p>
            <p className='desc'>Sport</p>
            <p className='desc'>Petrol</p>
            <p className='desc'>1.4 T-GDI</p>
            <p className='desc'>150 HP</p>
            <p className='desc'>6.5 L/100km</p>
            <p className='desc'>28000</p>
            <button className='buy'>Buy</button>
          </figure>
        </div>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cardId: state.reducer.cardId,
    carsList: state.reducer.carsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCars: bindActionCreators(getCars, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarListContainer);
