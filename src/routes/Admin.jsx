import React from 'react';
import AdminDefaultContainer from '../components/AdminDefaultContainer/AdminDefaultContainer';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import AddUser from '../components/AddUser/AddUser';

const Admin = () => {
  return (
    <>
      <Header />
      <AdminDefaultContainer />
      <AddUser />
      <Footer />
    </>
  );
};

export default Admin;
