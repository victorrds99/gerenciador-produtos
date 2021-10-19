
import { Produto, ProdutoService } from './../shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-produto',
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: Produto[];
  constructor(private produtoService: ProdutoService) { }

  ngOnInit(): void {
    this.produtos = this.listarTodos();
    
  }

  listarTodos(): Produto[]{
    return this.produtoService.listarTodos();
  }

}
