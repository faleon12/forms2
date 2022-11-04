import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{

  formdata = new FormGroup({
    nombre: new FormControl(""),
    apellido: new FormControl(""),
    correo: new FormControl(""),
    password: new FormControl(""),
    fechaNacimiento: new FormControl(""),
    genero: new FormControl("")
  })
    

  constructor() { }

  ngOnInit() {

    }
  
    data = [
      {
        "nombre": "Juan",
        "apellido": "Perez",
        "correo": "juan@correo.com",
        "password": "123456",
        "fechaNacimiento": "1990-01-01",
        "genero": "Masculino"
      }];

  onSubmit(){
      console.log('Formulario enviado')
  }

}
