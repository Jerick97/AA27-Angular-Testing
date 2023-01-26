import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appTesting';

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
