import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'

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

    state = {
        name: "",
        description: "",
        price: 0,
        paymentMethod: "",
        category: "",
        photos: [""],
        installments: 0  
    }

    handleNameChange = (event) => {
        const newNameValue = event.target.value
        this.setState({ name: newNameValue })
    }
    handleDescriptionChange = (event) => {
        const newDescriptionValue = event.target.value
        this.setState({ description: newDescriptionValue })
    }
    handlePriceChange = (event) => {
        const newPriceValue = Number(event.target.value)
        this.setState({ price: newPriceValue })
    }
    handlePaymentMethodChange = (event) => {
        const newPaymentMethodValue = event.target.value
        this.setState({ paymentMethod: newPaymentMethodValue })
    }
    handleCategoryChange = (event) => {
        const newCategoryValue = event.target.value
        this.setState({ category: newCategoryValue })
    }
    handlePhotos = (event) => {
        const newPhotosValue = event.target.value
        this.setState({ photos: [newPhotosValue] })
    }
    handleInstallments = (event) => {
        const newInstallments = Number(event.target.value)
        this.setState({ installments: newInstallments })
    }
    handleCreateProducts = (event) => {
        event.preventDefault()
        const axiosConfig = {
            headers: {
                header: 'Content-Type: application/json'
            }
        }
        const body = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            paymentMethod: this.state.paymentMethod,
            category: this.state.category,
            photos: this.state.photos,
            installments: this.state.installments
        }
        console.log(body)
        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/fourUsedOne/products", body, axiosConfig)
        .then(() => {
            alert("Produto Cadastrado Com Sucesso!")
            this.setState({
                name: "",
                description: "",
                price: 0,
                paymentMethod: "",
                category: "",
                photos: [""],
                installments: 0
            })
        }).catch((error) => {
            console.log(error)
            alert("Erro Ao Cadastrar Produto")
        })
    }
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
                    <InputSpace value={this.state.name} onChange={this.handleNameChange} />
                    <div>
                        <label>Descrição:</label>
                    </div>
                    <InputSpace value={this.state.description} onChange={this.handleDescriptionChange} />
                    <div>
                        <label>Categoria:</label>
                        <SelectButton value={this.state.category} onChange={this.handleCategoryChange}>
                            <option value="accessories">Acessórios</option>
                            <option value="clothes">Roupas</option>
                            <option value="footwear">Calçado</option>
                            <option value="electronics">Eletrônicos</option>
                            <option value="others">Outros</option>
                        </SelectButton>
                    </div>
                    <div>
                        <label>Preço:</label> 
                    </div>
                    <InputSpacePreco type="number" value={this.state.price} onChange={this.handlePriceChange} />
                    <div>
                        <label>Método Pag:</label>
                        <SelectButton value={this.state.paymentMethod} onChange={this.handlePaymentMethodChange}>
                            <option value="creditCard">Cartão de credito</option>
                            <option value="billet">Boleto</option>
                            <option value="all">Ambas</option> 
                        </SelectButton>
                    </div>
                    <div>
                        <label>Numero de Parcelas:</label>
                        <SelectButton value={this.state.installments} onChange={this.handleInstallments}>
                            <option value="1">1x À Vista</option>
                            <option value="2">2 Vezes</option>
                            <option value="3">3 Vezes</option>
                            <option velue="4">4 Vezes</option>
                            <option value="5">5 Vezes</option>   
                        </SelectButton>
                    </div>
                    <button onClick={this.handleCreateProducts}>Cadastrar Produto</button>
                  </DescriçãoProduto>    
                </CadastrarProdutoDiv>
                <AdicionaImagem>
                    <h3>Adicione Uma Imagem:</h3>
                    <FotoProduto><FotoIcon /></FotoProduto>
                    <InputSpace value={this.state.photos} onChange={this.handlePhotos}></InputSpace>
                </AdicionaImagem>
            </QuadroBranco>
        </FlexContainer>
        )
    }
}