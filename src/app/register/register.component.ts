import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Authenticate } from '../authenticate';

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
  age
  cellNo
  user: Authenticate
  constructor(public authenticateService: AuthenticateService) { }

  ngOnInit(): void {
  }


  signUp() {

    this.user = new Authenticate(this.name, this.surname, this.email,this.age,this.cellNo);
    console.log(this.user);
    this.authenticateService.signUpUser(this.user)
  }
}
