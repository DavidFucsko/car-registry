import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserAuthenticatedGuard } from './guards/user-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    canActivate: [UserAuthenticatedGuard],
    component: AppComponent
  },
  {
    path: 'user-authentication',
    loadChildren: () => import('./user-authentication/user-authentication.module').then(m => m.UserAuthenticationModule)
  },
  {
    path: 'car-list',
    loadChildren: () => import('./car-list/car-list.module').then(m => m.CarListModule)
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
