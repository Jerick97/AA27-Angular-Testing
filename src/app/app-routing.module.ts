import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculadoraComponent } from './pages/calculadora/calculadora.component';

const routes: Routes = [
  /*{path: '', component:CalculadoraComponent}, //redireccionar al Home
  {path: '**', pathMatch:'full',redirectTo:''}//Cualquier url redirija al Home*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
