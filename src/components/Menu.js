import React from 'react';
import styled from 'styled-components';

import Filter from './Filter.js';

const MenuWrapper = styled.div`
  max-width: 15vw;
  font-family: 'Roboto', sans-serif;
  background-color: #c8ab7f;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  overflow: auto;
  box-sizing: border-box;
  padding-left: 16px;
`;
const Title = styled.h3`
  color: #95203a;
`;
const Itens = styled.p`
  box-sizing: border-box;
  max-width: 80%;
  font-weight: bold;
  color: #374646;
  cursor: pointer;
  margin: 0;
  margin-bottom: 16px;
  padding-left: 8px;
  border-left: 2px solid #c8ab7f;
  transition: border 0.1s ease-in-out;
  :hover {
    border-color: white;
  }
`;

export default class Menu extends React.Component {
  render() {
    return (
      <MenuWrapper>
        <Title>Categorias</Title>
        <Itens>Todos</Itens>
        <Itens>Acessórios</Itens>
        <Itens>Vestuário</Itens>
        <Itens>Brinquedos</Itens>
        <Itens>Móveis</Itens>
        <Itens>Eletrônicos</Itens>
        <Itens>Outros</Itens>

        <Filter />
      </MenuWrapper>
    );
  }
}
