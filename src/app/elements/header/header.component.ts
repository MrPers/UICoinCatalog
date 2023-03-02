import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }  
  
  login(){
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

}
