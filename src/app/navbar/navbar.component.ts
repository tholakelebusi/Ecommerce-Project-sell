import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedInnn:boolean=false;
   isLoggedIn : any;

  constructor(public authService : AuthenticateService,private router : Router) { 
     this.isLoggedIn = authService.getCurrentUser()
 
  }

  ngOnInit(): void {
  }

  
  logout(){
    // console.log("loggin out");
    
      this.authService.logout()
     this.router.navigateByUrl("/login")
this.isLoggedInnn=true;
  }

}
