import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: #f4eeb4;
  background: #7c574f;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 16px;
  div {
    height: 100%;
    display: flex;
    flex-direction: column;
    a {
      color: inherit;
      text-decoration: none;
      cursor: default;
      :first-child {
        margin-bottom: 8px;
      }
      :last-child {
        margin-top: 8px;
      }
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
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div>
        <a href="https://github.com/future4code/Kessia-Lopes" target="_blank">
          <span>Késsia Lopes</span>
        </a>
        <a href="https://github.com/future4code/Luiz-Dai" target="_blank">
          <span>Luiz Mitsuru Dai</span>
        </a>
      </div>
      <div>
        <a href="https://github.com/future4code/Thiago-Stephen" target="_blank">
          <span>Thiago Stephen</span>
        </a>
        <a href="https://github.com/future4code/Yuzo-Okamoto" target="_blank">
          <span>Yuzo Santana Okamoto</span>
        </a>
      </div>
    </StyledFooter>
  );
};

export default Footer;
