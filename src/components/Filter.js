import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';

const FilterPrice = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  font-size: 80%;
`;
const Title = styled.h3`
  color: #95203a;
`;
const Labels = styled.label`
  color: #374646;
  font-weight: bold;
`;

export default class Filter extends React.Component {
  state = {
    products: [],
    valueInputMax: '',
    valueInputMin: '',
  };
  changeInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  render() {
    return (
      <FilterPrice>
        <Title>Filtrar por preço</Title>
        <Labels>Valor Mínimo:</Labels>
        <TextField
          onChange={this.changeInput}
          type='number'
          id='valueInputMin'
        />
        <hr />
        <Labels>Valor Máximo:</Labels>
        <TextField
          onChange={this.changeInput}
          type='number'
          id='valueInputMax'
        />
      </FilterPrice>
    );
  }
}
