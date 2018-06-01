import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import Home from '@/pages/home';
import Layout from '@/components/layout/index.js';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/product' component={Home}/>
            <Route path='/product-category' component={Home}/>
            <Redirect from="*" to="/"></Redirect>
          </Switch>
        </Layout>
      </Router>
    );
  }
}

export default App;
