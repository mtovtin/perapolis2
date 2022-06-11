import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ooan-component',
  templateUrl: './ooan.component.html',
  styleUrls: ['./ooan.component.css']
})
export class OoanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  navbarOpen = false;
  status: boolean = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
    this.status = !this.status;  
  }
}
