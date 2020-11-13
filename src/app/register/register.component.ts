import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';
import { Authenticate} from '../authenticate';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email
  password
  firstname
  lastname
  user:Authenticate
  constructor(public authenticateService:AuthenticateService) { }

  ngOnInit(): void {
  }


  signUp()

  {
this.user=new Authenticate(this.firstname,this.lastname,this.email,this.password);
this.authenticateService.signUpUser(this.user)
  }
}
