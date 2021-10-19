import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoRoute } from './produtos'

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/produtos/listar',
    pathMatch: 'full'
  },
  ...ProdutoRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
