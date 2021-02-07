import React, { useState } from 'react';
import AddEmployee from '../AddEmployee/AddEmployee';
import './EmployeesList.scss';

const EmployeesList = () => {
  const [isOpenModalAddEmployee, setIsOpenModalEmplyee] = useState(false);

  const onClickPlus = () => {
    // console.log('neno');
    setIsOpenModalEmplyee(true);
  };

  return (
    <>
      <div className='add-icon'>
        <i className='fas fa-plus-circle' onClick={onClickPlus}></i>
      </div>
      <table className='content-table'>
        <thead>
          <tr className='row-title'>
            <th className='title'>User Id</th>
            <th className='title'>First Name</th>
            <th className='title'>Last Name</th>
            <th className='title'>Username</th>
            <th className='title'>Email</th>
            <th className='title'>Role</th>
            <th className='title'>Edit</th>
            <th className='title'>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr className='row-item'>
            <td className='item'>1</td>
            <td className='item'>Ana</td>
            <td className='item'>Anic</td>
            <td className='item'>anaanic</td>
            <td className='item'>ana@gmail.com</td>
            <td className='item'>Customer</td>
            <td className='item'>
              <button className='edit-btn'>Edit</button>
            </td>
            <td className='item'>
              <button className='delete-btn'>Delete</button>
            </td>
          </tr>
          <tr className='row-item'>
            <td className='item'>2</td>
            <td className='item'>Neno</td>
            <td className='item'>Zidic</td>
            <td className='item'>nenozidic</td>
            <td className='item'>neno@gmail.com</td>
            <td className='item'>Employee</td>
            <td className='item'>
              <button className='edit-btn'>Edit</button>
            </td>
            <td className='item'>
              <button className='delete-btn'>Delete</button>
            </td>
          </tr>
          <tr className='row-item'>
            <td className='item'>3</td>
            <td className='item'>Dara</td>
            <td className='item'>Daric</td>
            <td className='item'>daradaric</td>
            <td className='item'>dara@gmail.com</td>
            <td className='item'>Employee</td>
            <td className='item'>
              <button className='edit-btn'>Edit</button>
            </td>
            <td className='item'>
              <button className='delete-btn'>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
      <AddEmployee
        open={isOpenModalAddEmployee}
        onClose={() => setIsOpenModalEmplyee(false)}
      />
    </>
  );
};

export default EmployeesList;
