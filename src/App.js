import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./pages/Home"
import Short from "./pages/Short"
import Long from "./pages/Long"
import Medium from "./pages/Medium"
import Custom from "./pages/Custom"
import Navtabs from "./components/Navtabs/Navtabs"
import './App.css';

import {Provider} from "react-redux"
import store from "./store"


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Navtabs></Navtabs>
      <Router>
        <Route exact path="/" component={Home}/>
        <Route exact path="/home" component={Home}/>
        <Route exact path="/shortcampaign" component={Short}/>
        <Route exact path="/mediumcampaign" component={Medium}/>
        <Route exact path="/longcampaign" component={Long}/>
        <Route exact path="/customcampaign" component={Custom}/>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
