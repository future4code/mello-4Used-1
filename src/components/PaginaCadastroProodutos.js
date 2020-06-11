import React, { Component } from 'react'
import styled from 'styled-components'

import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField'

import FotoIcon from '@material-ui/icons/AddAPhoto'

const FlexContainer = styled.div`
    display: flex;
    background-color: gray;
    height: 520px;
    width: 100%;
    justify-content: center; 
    align-items: center;  
`
const QuadroBranco = styled.div`
    display: flex;
    background-color: white;
    border: 1px solid black;
    height: 420px;
    width: 700px;
    border: 1px solid black; 
`
const FotoProduto = styled.div`
    display: flex;
    background-color: grey;
    width: 150px;
    height: 150px;
    justify-content: center;
    align-items: center;
    margin-left: 70px;
    margin-top: 40px;
    cursor: pointer;
`
const CadastrarProdutoDiv = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    width: 60%;
    align-items: center;    
> h3 {
    text-align: center;
    margin-bottom: 1px;
}
> h4 {   
}
`
const AdicionaImagem = styled.div`
    border: 1px solid black;
    width: 45%; 
> h3 {
    text-align: center;  
}
`
const DescriçãoProduto = styled.form`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    width: 100%;
    height: 100%;
    text-align: left;
    border: 1px solid black;
> div {
    justify-content: space-around;
    margin-right: 100px;
}
`  
const SelectButton = styled(Select)`
    margin-left: 5px;
    width: 50px;
    height: 25px;
    display: flex;
    position: relative;
    background-color: whitesmoke;
`
const InputSpace = styled(TextField)`
    background-color: whitesmoke;
    display: flex;
    position: relative;
    margin-left: 5px;
`
const InputSpacePreco = styled(TextField)`
    width: 100px;
    background-color: whitesmoke;
`

export class CadastrarProduto extends Component {
    render() {
        return(
            <FlexContainer>
            <QuadroBranco>
                <CadastrarProdutoDiv>
                  <h3>O QUE VOCÊ NÃO USA MAIS?</h3>
                  <h4>Cadastre Seu Produto</h4>
                  <DescriçãoProduto>
                    <div>
                        <label>Nome:</label>
                    </div>
                    <InputSpace />
                    <div>
                        <label>Descrição:</label>
                    </div>
                    <InputSpace />
                    <div>
                        <label>Categoria:</label>
                        <SelectButton>
                            <option>Acessórios</option>
                            <option>Roupas</option>
                            <option>Calçado</option>
                            <option>Eletrônicos</option>
                            <option>Outros</option>
                        </SelectButton>
                    </div>
                    <div>
                        <label>Preço:</label> 
                    </div>
                    <InputSpacePreco type="number"/>
                    <div>
                        <label>Método Pag:</label>
                        <SelectButton>
                            <option selected>Cartão de credito</option>
                            <option>Boleto</option>
                            <option>Ambas</option> 
                        </SelectButton>
                    </div>
                    <div>
                        <label>Numero de Parcelas:</label>
                        <SelectButton>
                            <option selected>1x À Vista</option>
                            <option>2 Vezes</option>
                            <option>3 Vezes</option>
                            <option>4 Vezes</option>
                            <option>5 Vezes</option>   
                        </SelectButton>
                    </div>
                  </DescriçãoProduto>    
                </CadastrarProdutoDiv>
                <AdicionaImagem>
                    <h3>Adicione Uma Imagem:</h3>
                    <FotoProduto><FotoIcon /></FotoProduto>
                </AdicionaImagem>
            </QuadroBranco>
        </FlexContainer>
        )
    }
}