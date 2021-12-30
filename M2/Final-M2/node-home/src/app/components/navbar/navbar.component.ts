import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  user: string | null = localStorage.getItem('token')
  
  constructor() { }

  salir(){
    localStorage.removeItem('token')
    window.location.reload()
  }

  ngOnInit(): void {
  }

}
