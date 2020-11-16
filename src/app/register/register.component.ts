import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Authenticate } from '../authenticate';
import { log } from 'console';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email
  password
  name
  surname
  user: Authenticate
  constructor(public authenticateService: AuthenticateService) { }

  ngOnInit(): void {
  }


  signUp() {
    this.user = new Authenticate(this.
      name, this.surname, this.email, this.password);
  
      
    this.user = new Authenticate(this.name, this.surname, this.email, this.password);
    console.log(this.user);
    this.authenticateService.signUpUser(this.user)
  }
}
