import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email
  password
  loggonInUser
  constructor(public authenticateService: AuthenticateService, public router: Router) { }

  ngOnInit(): void {
 

  }

  login() {
    this.authenticateService.signInUser(this.email, this.password)
    this.loggonInUser = this.authenticateService.userInfo
    this.router.navigateByUrl("/")

  }

}
