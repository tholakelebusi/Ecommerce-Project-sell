import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile
  constructor(public autheServive:AuthenticateService, public router:Router) { }

  ngOnInit(): void { 
    this.userProfile = this.autheServive.userInfo
    console.log(this.userProfile);
  }


  logout(){
    console.log("loggin out");
    
    this.autheServive.logout()
    this.router.navigateByUrl("/login")

  }

}
