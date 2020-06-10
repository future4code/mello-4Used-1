import React, { Component } from 'react';

import Header from './Header';
import Menu from './Menu';

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <Header />
        <Menu />
      </div>
    );
  }
}
