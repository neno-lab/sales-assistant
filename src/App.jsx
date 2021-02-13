import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from './routes/Home';
import './App.scss';
import OrderPage from './routes/OrderPage';
import Admin from './routes/Admin';
import Employee from './routes/Employee';

function App({ loginProps }) {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/order' component={OrderPage} />
        {loginProps.roles === 'Admin' ? (
          <Route exact path='/admin' component={Admin} />
        ) : null}
        <Route exact path='/employee' component={Employee} />
        <Route path='/' render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    loginProps: state.reducer.loginProps,
  };
};

export default connect(mapStateToProps, null)(App);
