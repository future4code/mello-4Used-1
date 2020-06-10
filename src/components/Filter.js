import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const FilterPrice = styled.div`
display:flex;
flex-direction: column;
width: 80%;
font-size: 80%;
`
const Title = styled.h3`
color: #95203A;
`
const Labels = styled.label`
color: #425454;
`

export default class Filter extends React.Component{
    render(){
        return(
            <div>
                 <FilterPrice>    
                        <Title>Filtrar por preço</Title>
                        <Labels>Valor Máximo:</Labels>
                        <input/>
                        <Labels>Valor Mínimo:</Labels>
                        <input/>
                    </FilterPrice>

            </div>

        );
    }
}