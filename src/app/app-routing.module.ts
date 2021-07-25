import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyloadGuard } from './auth/lazyload.guard';

import { LoginGuardGuard } from './auth/login-guard.guard';
import { LoginComponent } from './login/login.component';
import { DeactivatedGuard } from './practiceGuards/deactivated.guard';
import { TabularComponent } from './tabular/tabular.component';
import { TestServerComponent } from './test-server/test-server.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/login',
    pathMatch:"full"
  },
  {
    path:'users',
    component:UsersComponent
    // canLoad:[LazyloadGuard],
    // loadChildren:"../app/app-admin/app-admin.module.ts"
  },
  {
    path:'test',
    component:TestServerComponent,
    // canDeactivate:[DeactivatedGuard],
    children:[
      {
        path:':id',
        component:UsersComponent,
      }
    ],  
    // canActivateChild:[LoginGuardGuard]
  },
  {
    path:'tabs',component:TabularComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'**',
    component:UsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
