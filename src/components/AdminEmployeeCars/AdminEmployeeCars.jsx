import React from 'react';
import './AdminEmployeeCars.scss';

const AdminEmployeeCars = () => {
  return (
    <>
      <div className='add-icon'>
        <i className='fas fa-plus-circle'></i>
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
          <tr className='row-item'>
            <td className='item'>1</td>
            <td className='item'>TeamD Raptor</td>
            <td className='item'>SUV</td>
            <td className='item'>Motion Red</td>
            <td className='item'>Luxury</td>
            <td className='item'>Petrol</td>
            <td className='item'>1.6 T-GDI</td>
            <td className='item'>170 KS</td>
            <td className='item'>8.2 L/100km</td>
            <td className='item'>47000.00</td>
            <td className='item'>false</td>
            <td className='item'>false</td>
            <td className='item'>
              <button className='edit-btn'>Edit</button>
            </td>
            <td className='item'>
              <button className='delete-btn'>Delete</button>
            </td>
          </tr>
          <tr className='row-item'>
            <td className='item'>2</td>
            <td className='item'>TeamD Raptor</td>
            <td className='item'>SUV</td>
            <td className='item'>Motion Red</td>
            <td className='item'>Luxury</td>
            <td className='item'>Petrol</td>
            <td className='item'>1.6 T-GDI</td>
            <td className='item'>170 KS</td>
            <td className='item'>8.2 L/100km</td>
            <td className='item'>47000.00</td>
            <td className='item'>false</td>
            <td className='item'>false</td>
            <td className='item'>
              <button className='edit-btn'>Edit</button>
            </td>
            <td className='item'>
              <button className='delete-btn'>Delete</button>
            </td>
          </tr>
          <tr className='row-item'>
            <td className='item'>3</td>
            <td className='item'>TeamD Raptor</td>
            <td className='item'>SUV</td>
            <td className='item'>Motion Red</td>
            <td className='item'>Luxury</td>
            <td className='item'>Petrol</td>
            <td className='item'>1.6 T-GDI</td>
            <td className='item'>170 KS</td>
            <td className='item'>8.2 L/100km</td>
            <td className='item'>47000.00</td>
            <td className='item'>false</td>
            <td className='item'>false</td>
            <td className='item'>
              <button className='edit-btn'>Edit</button>
            </td>
            <td className='item'>
              <button className='delete-btn'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default AdminEmployeeCars;
