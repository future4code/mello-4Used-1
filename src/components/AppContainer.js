import React, { Component } from 'react'
import { GridCarrinho } from './GridCarrinho'
import {CadastrarProduto} from './PaginaCadastroProodutos'

export class AppContainer extends Component {
  render() {
    return (
      <div>
        <CadastrarProduto />

      </div>
    )
  }
}
