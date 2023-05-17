import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import RestaurantList from './components/RestaurantList';
import RestaurantDetail from './components/RestaurantDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={RestaurantList} />
        <Route path="/restaurant/:id" component={RestaurantDetail} />
      </Switch>
    </Router>
  );
}

export default App;
