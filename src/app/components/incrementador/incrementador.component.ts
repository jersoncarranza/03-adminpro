import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent  implements OnInit {
  ngOnInit(){
    this.btnClass = `btn ${this.btnClass}` ;

  }

  @Input('valor') progreso: number = 100;
  @Input() btnClass: string= 'btn-primary';

  @Output('valorSalida') valorSalida : EventEmitter<number> = new  EventEmitter();

  cambiarValor(valor:number){
    //let valor : number;
    //valor = Number(valor2);
    if(this.progreso >= 100 && valor >=0 ){
      this.valorSalida.emit(100);
      return this.progreso = 100;
 
    }

    if(this.progreso <= 0 && valor <0 ){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
      this.valorSalida.emit(this.progreso);
     return this.progreso = this.progreso + valor;
  }

  onChange(nuevovalor: number){

    if(nuevovalor >= 100){
      this.progreso = 100;
    }else if(nuevovalor <=0){
      this.progreso= 0;
    }else{
      this.progreso = nuevovalor;
    }
    this.valorSalida.emit(this.progreso);
   

  }
 
}
