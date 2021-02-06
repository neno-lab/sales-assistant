import React from 'react';
import './AdminDefaultContainer.scss';

const AdminDefaultContainer = () => {
  return (
    <div className='admin-default-container'>
      <div className='users-cars'>
        <div className='users'>Users</div>
        <div className='cars'>Cars</div>
      </div>

      <div className='add-icon'>
        <i className='fas fa-plus-circle'></i>
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
    </div>
  );
};

export default AdminDefaultContainer;
