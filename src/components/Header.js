import React, { Component } from 'react';
import styled from 'styled-components';

import logo from '../assets/4used.png';

import {
  AppBar,
  Toolbar,
  InputBase,
  IconButton,
  Typography,
} from '@material-ui/core';
import { Search, Home, ShoppingCart, Face } from '@material-ui/icons';

const StyledToolbar = styled(Toolbar)`
  background: #7c574f;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  .logo {
    max-width: 100px;
    height: auto;
    cursor: pointer;
  }
  .topMenu {
    display: flex;
    align-items: center;
    flex-direction: row;
    height: 100%;
    .searchBar {
      height: 50%;
      display: ${(props) => (props.active === 'cardGrid' ? 'flex' : 'none')};
      align-items: center;
      justify-content: center;
      margin-right: 16px;
      .searchIcon {
        height: 100%;
      }
      .searchInput {
        padding-left: 8px;
        background: white;
      }
    }
    .menuItems {
      display: flex;
      .home {
        .homeIcon {
          width: 35px;
          height: 35px;
        }
      }
      .cart {
        .cartIcon {
          width: 35px;
          height: 35px;
        }
      }
      .profile {
        display: flex;
        flex-direction: column;
        .profileIcon {
          width: 35px;
          height: 35px;
        }
        .profileText {
        }
      }
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  color: #f4eeb4;
  display: flex;
  flex-direction: column;
`;

class Header extends Component {
  render() {
    const {
      active,
      searchValue,
      handleSearchValue,
      handleActiveContent,
    } = this.props;
    return (
      <AppBar>
        <StyledToolbar active={active}>
          <img
            onClick={() => handleActiveContent('cardGrid')}
            src={logo}
            alt="4Used logo"
            className="logo"
          />

          <div className="topMenu">
            <div className="searchBar" active={active}>
              <Search className="searchIcon" />
              <InputBase
                onChange={(e) => handleSearchValue(e.target.value)}
                value={searchValue}
                type="search"
                className="searchInput"
              />
            </div>

            <div className="menuItems">
              <div>
                <StyledIconButton
                  onClick={() => handleActiveContent('cardGrid')}
                  className="home"
                >
                  <Home className="homeIcon" />
                </StyledIconButton>
              </div>
              <div>
                <StyledIconButton
                  onClick={() => handleActiveContent('gridCarrinho')}
                  className="cart"
                >
                  <ShoppingCart className="cartIcon" />
                </StyledIconButton>
              </div>

              <div>
                <StyledIconButton
                  onClick={() => handleActiveContent('cadastrarProduto')}
                  className="profile"
                >
                  <Face className="profileIcon" />
                </StyledIconButton>
                <Typography
                  className="profileText"
                  style={{ color: '#F4EEB4' }}
                  align="center"
                >
                  <span>Entrar</span>
                </Typography>
              </div>
            </div>
          </div>
        </StyledToolbar>
      </AppBar>
    );
  }
}

export default Header;
