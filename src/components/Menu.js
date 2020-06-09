import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div`
display: flex;
flex-direction: column;
background-color:#C8AB7F;
width:12%;
height: 665px;
font-family: 'Roboto', sans-serif;
font-weight: bold;
;
`
const Nav = styled.nav`
display: flex;
flex-direction: column;
margin:auto 7%;
;
`

const Filter = styled.div`
display:flex;
flex-direction: column;
width: 80%;
`
const Title = styled.h3`
color: #95203A;
`
const Labels = styled.label`
color: #425454;
`
const Itens = styled.p`
color: #425454;
cursor: pointer;
`


export default class Menu extends React.Component{
    render(){
        return(
            <Container>
                <Nav>
                    <Title>Categorias</Title>
                    <Itens>Acessórios</Itens>
                    <Itens>Vestuário</Itens>
                    <Itens>Móveis</Itens>
                    <Itens>Eletrônicos</Itens>
                    <hr />
                   
                    <Filter>    
                        <Title>Filtro</Title>
                        <Labels>Valor Máximo:</Labels>
                        <input/>
                        <Labels>Valor Mínimo:</Labels>
                        <input/>
                    </Filter>
                </Nav>     
            </Container>  
        )
    }
}