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

  handleMenuItems = (newActive) => {
    this.setState({ active: newActive });
  };

  render() {
    const { active, products, searchValue } = this.state;
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
              <CardGrid products={filteredProducts} />
            </>
          );
        case 'gridCarrinho':
          return <GridCarrinho />;
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
          searchValue={this.state.searchValue}
          handleSearchValue={this.handleSearchValue}
          handleMenuItems={this.handleMenuItems}
        />
        <div className="content">{renderActive()}</div>

        <Footer />
      </StyledApp>
    );
  }
}
