import React, { Component } from 'react'
import styled from 'styled-components'

import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

import FotoIcon from '@material-ui/icons/CropOriginal'

const FlexContainer = styled.div`
    display: flex;
    background-color: gray;
    height: 450px;
    width: 100%;
    justify-content: center; 
    align-items: center;  
`
const QuadroBranco = styled.div`
    display: flex;
    background-color: white;
    border: 1px solid black;
    height: 350px;
    width: 700px;
    border: 1px solid black; 
`
const FotoProduto = styled.div`
    display: flex;
    background-color: grey;
    width: 75px;
    height: 75px;
    justify-content: center;
    align-items: center;
> p {
    text-align: center;
    justify-content: center;
    align-items: center;
    font-size: 14px;
}
`
const ConcluirCompra = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 40%;
    align-items: center;    
> h3 {
    text-align: center;
}
`
const FormaPagamento = styled.div`
    border: 1px solid black;
    width: 60%;
> h3 {
    margin-left: 15px;
}
`
const DescriçãoProduto = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: left;
> p {
    margin: 5px;
    display: flex;
    flex-shrink: 0;
}
`
const SelectButton = styled(Select)`
margin-left: 15px;
width: 150px;
`
export class GridCarrinho extends Component {
  render() {
    return (
      <FlexContainer>
          <QuadroBranco>
              <ConcluirCompra>
                <h3>Concluir Compra:</h3>
                <FotoProduto><FotoIcon /></FotoProduto>
                <DescriçãoProduto>
                    <p>Nome:</p>
                    <p>Descrição:</p>
                    <p>Categoria:</p>
                    <p>Preço:</p>
                    <p>Método Pag:</p>
                    <p>Numero de Parcelas:</p>
                </DescriçãoProduto>    
              </ConcluirCompra>
              <FormaPagamento>
                  <h3>Pay Banc:</h3>
                  <SelectButton>
                      <option selected>Cartão de credito</option>
                      <option>Boleto</option>  
                  </SelectButton>
                  <Button>Pagar</Button>
              </FormaPagamento>
          </QuadroBranco>
      </FlexContainer>
    )
  }
}