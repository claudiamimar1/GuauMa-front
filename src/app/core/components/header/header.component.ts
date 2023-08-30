import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public menuActive: boolean = false;
  public categoriaActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  mostrarMenu() {
    this.menuActive = !this.menuActive;
  }

  mostrarCategoria() {
    this.categoriaActive = !this.categoriaActive;
  }

}
