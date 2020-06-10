import React, { Component } from 'react';
import styled from 'styled-components';

import { AppBar } from '@material-ui/core';

const StyledAppBar = styled(AppBar)`
  background: black;
`;

class Header extends Component {
  render() {
    return <StyledAppBar>AppBar</StyledAppBar>;
  }
}

export default Header;
