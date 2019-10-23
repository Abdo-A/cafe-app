import { Switch, Route, Redirect } from 'react-router-dom';
import React from 'react';

import AddMenuItem from './pages/AddMenuItem';
import Menu from './pages/Menu';

import './App.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route path='/' exact component={Menu} />
        <Route path='/add' component={AddMenuItem} />
        <Redirect to={Menu} />
      </Switch>
    </div>
  );
}

export default App;
