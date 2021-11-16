import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { Home, Short, Long, Medium, Custom } from "./pages";
import { Navtabs, Footer } from "./components/components";
import './App.css';
import "./scss/Custom.scss";
import { Provider } from "react-redux";
import store from "./store";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
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
    </ApolloProvider>
  );
}

export default App;
