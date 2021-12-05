import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent, EmployeeComponent, FormComponent, DetailComponent } from './utils/index.pages';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'employee/form',
    component: FormComponent
  },
  {
    path: 'employee/detail/:id',
    component: DetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
