import { Injectable } from '@angular/core';

import { Produto } from '.';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor() { }


  listarTodos(): Produto[]{
    const produtos = localStorage['produtos'];
    return produtos ? JSON.parse(produtos): [];
  }

  cadastrar(produto: Produto): void {
    const produtos = this.listarTodos();
    produto.id = new Date().getTime();
    produtos.push(produto);
    localStorage['produtos'] = JSON.stringify(produtos);
  }

  buscarPorId(id: number): Produto{
    const produtos: Produto[] = this.listarTodos();
    return produtos.find(produto => produto.id === id);
  }

  atualizar(produto: Produto):void{
    const produtos: Produto[] = this.listarTodos();
    produtos.forEach((obj, index, objs) => {
      if (produto.id === obj.id){
        objs[index] = produto;
      }
    });
    localStorage['produtos'] = JSON.stringify(produtos);
  }

  remover(id: number):void{
    let produtos: Produto[] = this.listarTodos();
    produtos = produtos.filter(produto => produto.id);
    localStorage['produtos'] = JSON.stringify(produtos);
  }

  alterarStatus(id: number): void {

    const produtos: Produto[] = this.listarTodos();
    produtos.forEach((obj,index, objs) => {
      if(id === obj.id) {
        objs[index].concluida = !obj.concluida;
      }
    });
    localStorage['produtos'] = JSON.stringify(produtos);

}}
