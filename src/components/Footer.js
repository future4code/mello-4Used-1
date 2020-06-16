import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  height: 5vh;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f4eeb4;
  background: #7c574f;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  a {
    color: inherit;
    text-decoration: none;
    cursor: default;

    > span {
      cursor: pointer;
      padding: 5px;
      border-radius: 3px;
      transition: all 0.1s ease-in-out;
      :hover {
        background-color: #725049;
      }
    }
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <a href='https://github.com/future4code/Kessia-Lopes' target='_blank'>
        <span>Késsia Lopes</span>
      </a>

      <a href='https://github.com/future4code/Luiz-Dai' target='_blank'>
        <span>Luiz Mitsuru Dai</span>
      </a>

      <a href='https://github.com/future4code/Thiago-Stephen' target='_blank'>
        <span>Thiago Stephen</span>
      </a>

      <a href='https://github.com/future4code/Yuzo-Okamoto' target='_blank'>
        <span>Yuzo Santana Okamoto</span>
      </a>
    </StyledFooter>
  );
};

export default Footer;
