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
import { Search, ShoppingCart, Face } from '@material-ui/icons';

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
      display: flex;
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
    return (
      <AppBar>
        <StyledToolbar>
          <img src={logo} alt="4Used logo" className="logo" />

          <div className="topMenu">
            <div className="searchBar">
              <Search className="searchIcon" />
              <InputBase type="search" className="searchInput" />
            </div>

            <div className="menuItems">
              <div>
                <StyledIconButton className="cart">
                  <ShoppingCart className="cartIcon" />
                </StyledIconButton>
              </div>

              <div>
                <StyledIconButton className="profile">
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
