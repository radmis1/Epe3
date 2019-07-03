import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "./guards/auth.guard";
import { NologinGuard } from "./guards/nologin.guard";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule', canActivate : [AuthGuard]
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule' 
  },
  { path: 'login', loadChildren: './componentes/login/login.module#LoginPageModule', canActivate : [NologinGuard] },
  { path: 'prueba', loadChildren: './prueba/prueba.module#PruebaPageModule', canActivate : [AuthGuard] },
  { path: 'eliminar', loadChildren: './eliminar/eliminar.module#EliminarPageModule' },
  { path: 'actualizar', loadChildren: './actualizar/actualizar.module#ActualizarPageModule' },
  { path: 'acercade', loadChildren: './acercade/acercade.module#AcercadePageModule' },
  { path: 'leer', loadChildren: './leer/leer.module#LeerPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
