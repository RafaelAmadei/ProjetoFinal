import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home-module')
        .then(m => m.HomeModule)
  },

  {
    path: 'explorar-locais',
    loadChildren: () =>
      import('./pages/explorar-locais/explorar-locais-module')
        .then(m => m.ExplorarLocaisModule)
  },
  {
  path: 'perfil',
  loadChildren: () =>
    import('./pages/perfil/perfil-module')
      .then(m => m.PerfilModule)
  },
  {
  path: 'como-denunciar',
  loadChildren: () =>
    import('./pages/como-denunciar/como-denunciar-module')
      .then(m => m.ComoDenunciarModule)
},

{
  path: 'registrar-ocorrencia',
  loadChildren: () =>
    import('./pages/registrar-ocorrencia/registrar-ocorrencia-module')
      .then(m => m.RegistrarOcorrenciaModule)
},

  {
    path: '**',
    redirectTo: ''
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }