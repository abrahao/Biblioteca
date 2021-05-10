import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from "./views/home/home.component";
import { BibliotecaCrudComponent } from "./views/biblioteca-crud/biblioteca-crud.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "livros", component: BibliotecaCrudComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
