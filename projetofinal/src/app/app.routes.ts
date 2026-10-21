import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'cadastro-projeto',
    pathMatch: 'full'
  },
  {
    path: 'cadastro-projeto',
    loadComponent: () =>
      import('./modulo1/cadastro-projeto/cadastro-projeto')
        .then(m => m.CadastroProjeto)
  }
];
