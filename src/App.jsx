import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './routes/Home';
import './App.scss';
import OrderPage from './routes/OrderPage';
import Admin from './routes/Admin';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/order' component={OrderPage} />
        <Route exact path='/admin' component={Admin} />
        <Route path='/' render={() => <h1>Not Found</h1>} />
      </Switch>
    </Router>
  );
}

export default App;
