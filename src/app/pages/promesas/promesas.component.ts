import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.promesas();


    console.log('finInit');
  }

  promesas(){
    const promesa = new Promise((resolve, reject) =>{ 

      if(false){
        resolve('Hola Mundo');
      }else{
        reject('algo salio mal');
      }
    
    });

    
    promesa.then( (mensaje)=> {
      console.log(mensaje);
    })
   //.catch(error => console.log('Error rçes mi promesa', error));

  }
}
