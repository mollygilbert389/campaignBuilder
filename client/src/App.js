import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Short, Long, Medium, Custom } from "./pages";
import { Navtabs, Footer } from "./components/components";
import './App.css';
import "./scss/Custom.scss";
import { Provider } from "react-redux";
import store from "./store";

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
        <Footer/>
      </div>
    </Provider>
  );
}

export default App;
