import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Component1Component } from './component1/component1.component';
import { ParentComponent } from './parent/parent.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  {path:"users", component:UserListComponent},
  {path:"dataTransfer",component:ParentComponent},
  {path:"component",component:Component1Component},
  {path:'',redirectTo:'users',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
