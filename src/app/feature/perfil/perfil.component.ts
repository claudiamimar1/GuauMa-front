import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  public datosPerfil: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.cargarDatos();
  }

  private cargarDatos() {
    this.datosPerfil = new FormGroup({
      nombres: new FormControl('Carolina', Validators.maxLength(20)),
      apellidos: new FormControl('Marín', Validators.maxLength(30)),
      correoElectronico: new FormControl('cmarinh@uqvirtual.edu.co', Validators.email),
      numeroContacto: new FormControl('3116595201', [Validators.pattern(/^\d+$/), Validators.maxLength(10)])
    });
  }

}
