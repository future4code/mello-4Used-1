import React, { Component } from 'react'
import styled from 'styled-components'

import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button'

import FotoIcon from '@material-ui/icons/CropOriginal'
import axios from 'axios';

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
    height: 400px;
    width: 800px;
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
    width: 60%;
    align-items: center;    
> h3 {
    text-align: center;
}
`
const FormaPagamento = styled.div`
    border: 1px solid black;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 40%;
> div{
    margin:10px;
}    
> h3 {
    margin-left: 15px;
}
`
const DescriçãoProduto = styled.div`
    display: flex;
    align-items:center;
    justify-content:space-between;
    margin-top:20px;
    width:80%;
    height:50px;
    border: 3px dotted black;
    border-radius:5px;
    padding:0 8px;
   
> img{
  max-width: 50px;
  max-height: 50px;
}
   
> p {
    margin:0 10px;
    
}
> span{
    cursor: pointer;
    color:red;

}
span:hover{
font-weight:bold;
}
`
const SelectButton = styled(Select)`
margin-left: 15px;
width: 150px;
`


export class GridCarrinho extends Component {



    render() {
        const renderCart = this.props.cart.map((product) => {
            return (
                <DescriçãoProduto>
                    <img src="https://picsum.photos/200/200" />
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <span onClick={() => this.props.removeItem(product.id)}>X</span>
                </DescriçãoProduto>
            )
        })
        return (
            <FlexContainer >
                <QuadroBranco>
                    <ConcluirCompra>
                        {renderCart}
                    </ConcluirCompra>
                    <FormaPagamento>
                        <div>Valor Total: R${this.props.cart.reduce((acc, current) => acc + current.price, 0)}</div>
                        <div>Forma de Pagamento</div>
                        <button onClick={this.props.checkOut}>FECHAR PEDIDO</button>

                    </FormaPagamento>
                </QuadroBranco>
            </FlexContainer>
        )
    }
}