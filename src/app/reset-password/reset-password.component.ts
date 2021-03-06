import { Component, OnInit } from '@angular/core';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  constructor(private authService : AuthenticateService) { }

  ngOnInit(): void {
  }

   onSubmit(form) {
   
this.authService.resetPassword(form);


}

  forgotPassword(email) {
    this.authService.ForgotPassword(email);
  }

}
