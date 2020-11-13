import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email
  password
 
  constructor(public authenticateService:AuthenticateService){}

  ngOnInit(): void {
    
  }
 
  login(){
    this.authenticateService.signInUser(this.email, this.password)
  
  }
 resertPassword()
  {
   this.authenticateService.resetPassword(this.email);
  }
}
