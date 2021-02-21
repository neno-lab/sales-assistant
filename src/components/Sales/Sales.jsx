import React, { useEffect } from 'react';
import './Sales.scss';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TeamDSalesAssistant from '../../api/TeamDSalesAssistant';
import { getSales } from '../../redux/actions/actions';

const Sales = ({ loginProps, salesList, getSales }) => {
  const config = {
    headers: {
      Authorization: `Bearer ${loginProps.token}`,
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await TeamDSalesAssistant.get(
          `/api/users/${loginProps.roles}`,
          config
        );
        console.log('sales', response);
        getSales(response.data.Sales);
      } catch (err) {
        console.error(err.message);
      }
    };
    fetchData();
  }, [getSales, loginProps.roles]);

  return (
    <table className='content-table'>
      <thead>
        <tr className='row-title'>
          <th className='title'>Hatchbacks Sold</th>
          <th className='title'>Sedans Sold</th>
          <th className='title'>Suvs Sold</th>
          <th className='title'>Total Cars Sold</th>
          <th className='title'>Orders In Progress</th>
        </tr>
      </thead>
      <tbody>
        {salesList.map((sales) => (
          <tr
            className='row-item'
            key={Math.random().toString(36).substr(2, 9)}
          >
            <td className='item'>{sales.Hatchbacks_Sold}</td>
            <td className='item'>{sales.Sedans_Sold}</td>
            <td className='item'>{sales.Suvs_Sold}</td>
            <td className='item'>{sales.TotalCarsSold}</td>
            <td className='item'>{sales.OrdersInProgress}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
    salesList: state.reducer.salesList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getSales: bindActionCreators(getSales, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sales);
