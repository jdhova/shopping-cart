import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

//import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const App = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Navbar />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/cart' component={Cart} />
            {/* <Route exact path='/about' component={about} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
};

export default App;
