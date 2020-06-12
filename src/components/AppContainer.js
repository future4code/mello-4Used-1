import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Header from './Header';
import Menu from './Menu';
import CardGrid from './CardGrid/CardGrid';
import { GridCarrinho } from './GridCarrinho';
import { CadastrarProduto } from './PaginaCadastroProodutos';
import Footer from './Footer';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  .content {
    display: flex;
    margin-top: 100px;
  }
`;

export class AppContainer extends Component {
  state = {
    active: 'cardGrid',
    products: [],
    searchValue: '',
    cart: [],
  };

  componentDidMount = () => {
    axios
      .get(
        'https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products'
      )
      .then((response) => {
        this.setState({ products: response.data.products });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  handleSearchValue = (newValue) => {
    this.setState({ searchValue: newValue });
  };

  handleActiveContent = (newActive) => {
    this.setState({ active: newActive });
  };

  addToCart = (id) => {
    const selectedProduct = this.state.products.find(product => id === product.id)
    const newCart = [...this.state.cart, selectedProduct]
    console.log(newCart)
    this.setState({ cart: newCart })
  }
  removeItem = (id) => {
    const newCart = this.state.cart.filter((product) => {
      return id !== product.id

    })
    this.setState({ cart: newCart })
  }
  checkOut = (event) => {
    event.preventDefault()
    alert("Obrigado pela compra")
    this.setState({ cart: [] })
  }

  render() {
    const { active, products, searchValue, cart } = this.state;
    const handleActiveContent = this.handleActiveContent;
    const handleSearchValue = this.handleSearchValue;
    const addToCart = this.addToCart;
    const removeItem = this.removeItem;
    const checkOut = this.checkOut;
    const filteredProducts = products.filter((product) => {
      const productName = product.name.toLowerCase();
      return productName.indexOf(searchValue.toLowerCase()) >= 0;
    });

    function renderActive() {
      switch (active) {
        case 'cardGrid':
          return (
            <>
              <Menu />
              <CardGrid addToCart={addToCart} handleActiveContent={handleActiveContent} products={filteredProducts} />
            </>
          );
        case 'gridCarrinho':
          return <GridCarrinho checkOut={checkOut} removeItem={removeItem} cart={cart} />;
        case 'cadastrarProduto':
          return <CadastrarProduto />;
        default:
          return (
            <>
              <Menu />
              <CardGrid />
            </>
          );
      }
    }
    return (
      <StyledApp>
        <Header
          active={active}
          searchValue={searchValue}
          handleSearchValue={handleSearchValue}
          handleActiveContent={handleActiveContent}
        />
        <div className="content">{renderActive()}</div>
        <Footer />
      </StyledApp>
    );
  }
}
