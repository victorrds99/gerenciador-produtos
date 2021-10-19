import { ProdutoService } from './../shared/produto.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from '..';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editar-produtos',
  templateUrl: './editar-produtos.component.html',
  styleUrls: ['./editar-produtos.component.css']
})
export class EditarProdutosComponent implements OnInit {

  @ViewChild('formProduto') formProduto: NgForm;
  produto: Produto;

  constructor(
    private produtoService: ProdutoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.produto = this.produtoService.buscarPorId(id);
  }

  atualizar(): void {
    if( this.formProduto.form.valid){
      this.produtoService.atualizar(this.produto);
      this.router.navigate(['/produtos']);
    }
  }

}
