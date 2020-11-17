import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Authenticate } from '../authenticate';
import { AuthenticateService } from '../authenticate.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  userProfile ;
  constructor(public  autheServive:AuthenticateService, private router:Router) { }

  ngOnInit(): void { 
    
    this.userProfile = this.autheServive.userInfo
   console.log(this.userProfile);
   

  }



}
