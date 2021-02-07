import React from 'react';
import AdminDefaultContainer from '../components/AdminDefaultContainer/AdminDefaultContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AddEmployee from '../components/AddEmployee/AddEmployee';
import AddCar from '../components/AddCar/AddCar';

const Admin = () => {
  return (
    <>
      <Header />
      <AdminDefaultContainer />
      {/* <AddEmployee /> */}
      {/* <AddCar /> */}
      <Footer />
    </>
  );
};

export default Admin;
