import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Grid } from './components/Grid';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <h1> Sudoku Solver </h1>
        <Route component={Grid} />
      </Layout>
    );
  }
}
