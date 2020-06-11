import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Filter from './Filter.js'

const Container = styled.div`
display: flex;
flex-direction: column;
background-color:#C8AB7F;
width:12%;
height: 665px;
font-family: 'Roboto', sans-serif;
font-weight: bold;
font-size: 100%;
;
`
const Nav = styled.nav`
display: flex;
flex-direction: column;
margin: auto 7%;
;
`
const Title = styled.h3`
color: #95203A;
`
const Labels = styled.label`
color: #425454;
`
const Itens = styled.p`
font-size: 90%;
color: #425454;
cursor: pointer;
`


export default class Menu extends React.Component{
    render(){
        return(
            <Container>
                <Nav>
                    
                    <Title>Categorias</Title>
                    <Itens>Todos</Itens>
                    <Itens>Acessórios</Itens>
                    <Itens>Vestuário</Itens>
                    <Itens>Brinquedos</Itens>
                    <Itens>Móveis</Itens>
                    <Itens>Eletrônicos</Itens>
                    <Itens>Outros</Itens>
                    <hr />
                    <Filter />
                </Nav>     
            </Container>  
        )
    }
}