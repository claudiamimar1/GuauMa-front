import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public tabIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onTabClick(index) {
    this.tabIndex = index;
  }
}
