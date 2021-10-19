import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProdutoService, Produto } from '..';
@Component({
  selector: 'app-cadastrar-produtos',
  templateUrl: './cadastrar-produtos.component.html',
  styleUrls: ['./cadastrar-produtos.component.css']
})
export class CadastrarProdutosComponent implements OnInit {

  @ViewChild('formProduto') formProduto: NgForm;
  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private router: Router) { }

  ngOnInit(): void {
    this.produto = new Produto();
  }

  cadastrar() :void {
    if(this.formProduto.form.valid) {
      this.produtoService.cadastrar(this.produto);
      this.router.navigate(["/produtos"]);
    }
  }

}
