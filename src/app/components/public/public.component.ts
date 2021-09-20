import { Component, OnInit } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.css']
})
export class PublicComponent implements OnInit {

  constructor(public auth: AuthService){}

  loginWithRedirect(){
    this.auth.loginWithRedirect();

  }

  logout(){
    this.auth.logout();
  }
  ngOnInit(): void {
  }

}
