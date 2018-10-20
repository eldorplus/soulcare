import React, { Component } from 'react';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import { BrowserRouter as Router, Switch, Link, Route, Redirect } from 'react-router-dom';
import Home from './components/Home';
import Room from './components/Room';
import Patient from './components/Patient';
import './App.css';

const client = new ApolloClient({
  uri: "https://hasuratodo.herokuapp.com/v1alpha1/graphql",
})

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App container-fluid">
          <Switch>
            <Route path="/" exact={true} component={Home} />
            <Route path="/rooms" exact={true} component={Room} />
            <Route path="/rooms/:room_no" exact={true} component={Room} />
            <Route path="/patient/:pat_id" exact={true} component={Room} />
          </Switch>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
