import { Component, OnInit } from '@angular/core';
import { CompartirDatosService } from 'src/app/compartir-datos.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: string = '';
  contrasenia: number =0;
  constructor(private sharedData: CompartirDatosService) {}
  guardar(){
    this.sharedData.usuario = this.usuario;
  }

  ngOnInit() {
  }

}
