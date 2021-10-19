import { EditarProdutosComponent } from './editar/editar-produtos.component';
import { Routes } from "@angular/router";
import { ListarProdutoComponent } from './listar';
import { CadastrarProdutosComponent } from "./cadastrar";

export const ProdutoRoute: Routes = [
    {
        path: 'produtos',
        redirectTo: 'produtos/listar'
    },
    {
        path: 'produtos/listar',
        component: ListarProdutoComponent
    },
    {
        path: 'produtos/cadastrar',
        component: CadastrarProdutosComponent
    },
    {
        path: 'produtos/editar/:id',
        component: EditarProdutosComponent
    }

];