import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  Selected: string = "Selecciona Operación";
  numero1 !: number;
  numero2 !: number;
  resultado !: number;
  constructor() { }

  ngOnInit(): void {
  }

  Calcular(){
    this.resultado = eval(this.numero1 + this.Selected + this.numero2)
    
  }
}
