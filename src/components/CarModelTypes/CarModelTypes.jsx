import React, { useState } from 'react';
import AddCar from '../AddCar/AddCar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './CarModelTypes.scss';
import { deleteCar, getCars } from '../../redux/actions/actions';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';

const CarModelTypes = ({ carsList, loginProps, deleteCar }) => {
  const [isOpenModalAddEmployee, setIsOpenModalEmployee] = useState(false);

  const onClickPlus = () => {
    setIsOpenModalEmployee(true);
  };

  const handleDeleteCar = async (e, id) => {
    e.stopPropagation();
    try {
      const response = await TeamDSalesAssistant.delete(`/api/cars/${id}`, {
        headers: {
          Authorization: `Bearer ${loginProps.token}`,
        },
      });
      console.log(response);
      deleteCar(id);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <>
      <div className='add-icon'>
        <i className='fas fa-plus-circle' onClick={onClickPlus}></i>
      </div>{' '}
      <table className='content-table'>
        <thead>
          <tr className='row-title'>
            <th className='title'>Car Id</th>
            <th className='title'>Car Name</th>
            <th className='title'>Model Type</th>
            <th className='title'>Color Type</th>
            <th className='title'>Equipment Type</th>
            <th className='title'>Fuel Type</th>
            <th className='title'>Engine</th>
            <th className='title'>Power In Hp</th>
            <th className='title'>Avg. Consumption</th>
            <th className='title'>Car Price</th>
            <th className='title'>Order Status</th>
            <th className='title'>Order Completeness</th>
            <th className='title'>Edit</th>
            <th className='title'>Delete</th>
          </tr>
        </thead>
        <tbody>
          {carsList.map((car) => (
            <tr
              className='row-item'
              key={Math.random().toString(36).substr(2, 9)}
            >
              <td className='item'>{car.Car_Id}</td>
              <td className='item'>{car.Car_Name}</td>
              <td className='item'>{car.Model_Type}</td>
              <td className='item'>{car.Color_Type}</td>
              <td className='item'>{car.Equipment_Type}</td>
              <td className='item'>{car.FuelType}</td>
              <td className='item'>{car.Engine}</td>
              <td className='item'>{car.PowerInHp}</td>
              <td className='item'>{car.AvgConsumption}</td>
              <td className='item'>{car.Car_Price}</td>
              <td className='item'>
                {car.IsOrdered === false ? 'None' : 'Ordered'}
              </td>
              <td className='item'>
                {car.IsOrderComplete === false ? 'None' : 'Completed'}
              </td>
              <td className='item'>
                <button className='edit-btn'>Edit</button>
              </td>
              <td className='item'>
                <button
                  className='delete-btn'
                  onClick={(e) => handleDeleteCar(e, car.Car_Id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <AddCar
        open={isOpenModalAddEmployee}
        onClose={() => setIsOpenModalEmployee(false)}
      />
    </>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
    carsList: state.reducer.carsList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCars: bindActionCreators(getCars, dispatch),
    deleteCar: bindActionCreators(deleteCar, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CarModelTypes);
