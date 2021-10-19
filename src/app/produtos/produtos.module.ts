import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoService } from './shared';
import { ListarProdutoComponent } from './listar';
import { CadastrarProdutosComponent } from './cadastrar/cadastrar-produtos.component';
import { EditarProdutosComponent } from './editar/editar-produtos.component';

@NgModule({
  declarations: [
    ListarProdutoComponent,
    CadastrarProdutosComponent,
    EditarProdutosComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    ProdutoService
  ] 
})
export class ProdutosModule { }
