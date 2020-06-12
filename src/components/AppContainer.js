import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'


import Header from './Header';
import Menu from './Menu';
import CardGrid from './CardGrid/CardGrid'
import { GridCarrinho } from './GridCarrinho'
import {CadastrarProduto} from './PaginaCadastroProodutos'
import Footer from './Footer';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
.content {
  display: flex;
  margin-top: 100px;
}

`


export class AppContainer extends Component {
  state = {
    products: [],
    
  }

  componentDidMount = () => {
    axios
    .get("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products")
    .then((response) => {
      this.setState({products: response.data.products})
    }).catch((error) => {
      console.log(error)
    })
  }

   render() {
    return (
      <StyledApp>
        <Header />
        <div className="content">
          <Menu />
          <CardGrid products={this.state.products} />
        </div>
          <CadastrarProduto></CadastrarProduto>
        
        <Footer />
      </StyledApp>
    );
  }
}
