import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './containers/Home'
import About from './containers/About'
import Contact from './containers/Contact'
import ListingDetail from './containers/ListingDetails'
import Listings from './containers/Listings'
import Login from './containers/Login'
import signUp from './containers/SignUp'
import layout from './hocs/Layout'
import NotFound from './components/NotFound'

const App = () => {
  <Router>
    <layout>
      <Switch>
        <Route exact path = '/' component={Home} />
        <Route exact path = '/about' component={About} />
        <Route exact path = '/contact' component={Contact} />
        <Route exact path = '/listings' component={Listings} />
        <Route exact path = '/listings/:id' component={ListingDetail} />
        <Route exact path = '/login' component={Login} />
        <Route exact path = '/signup' component={signUp} />

        <Route component={NotFound} />
      </Switch>
    </layout>
  </Router>
};

export default App;
