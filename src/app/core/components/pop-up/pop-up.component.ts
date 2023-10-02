import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Resenia } from 'src/app/shared/model/resenia';
import { ProductoService } from 'src/app/shared/service/producto.service';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {

  public resenia: FormGroup;
  public idProd: number;
  public verResenia: string;

  constructor(
    public dialogRef: MatDialog,
    public productoService: ProductoService
  ) { }

  ngOnInit(): void {
    this.idProd = Number(localStorage.getItem('idProducto'));
    this.verResenia = localStorage.getItem('verResenia');
    this.resenia = new FormGroup({
      puntaje: new FormControl('', Validators.required),
      comentario: new FormControl('', Validators.required)
    });
  }

  openDialog(idProducto?: number, resenia?: boolean): void {
    this.dialogRef.open(PopUpComponent);
    localStorage.setItem('idProducto', String(idProducto));
    localStorage.setItem('verResenia', String(resenia));
  }

  guardarResenia(): void {
    const body: Resenia = {
      puntaje: this.resenia.controls.puntaje.value,
      comentario: this.resenia.controls.comentario.value,
      idProducto: this.idProd
    };
    this.productoService.crearResenia(body).subscribe(response => {
      alert('Se ha creado la reseña');
    });
  }

  closeDialog(): void {
    this.dialogRef.closeAll();
  }
}
