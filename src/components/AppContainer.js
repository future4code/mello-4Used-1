import React, { Component } from 'react'

import Header from './Header';
import Menu from './Menu';
import CardGrid from './CardGrid/CardGrid'
import { GridCarrinho } from './GridCarrinho'
import {CadastrarProduto} from './PaginaCadastroProodutos'
import Footer from './Footer';

export class AppContainer extends Component {
   render() {
    return (
      <div>
        <Header />
        <Menu />
        <Footer />
      </div>
    );
  }
}
