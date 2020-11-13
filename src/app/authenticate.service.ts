import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private db: AngularFirestore,
    public afAuth: AngularFireAuth) { }





  signUpUser(user)
  {
    firebase.default.auth().createUserWithEmailAndPassword(user.email,user.password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  }).then( results =>{
    console.log("successfull");
    
  });
}


signInUser(email,password){
  firebase.default.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
  }).then(result =>{
    console.log("success");
    
  });
}

// forgotPassword()
// {
// var user = firebase.default.auth().currentUser;
// var newPassword = getASecureRandomPassword();
// user.updatePassword(newPassword).then(function() {
//   // Update successful.
// }).catch(function(error) {
//   // An error happened.
// });
// }


// ResetPassword(form) {
//   console.log(form.get('confirmPassword'));
//   if (form.valid) {
//     this.IsResetFormValid = true;
//     this.authService.newPassword(this.ResponseResetForm.value).subscribe(
//       data => {
//         this.ResponseResetForm.reset();
//         this.successMessage = data.message;
//         setTimeout(() => {
//           this.successMessage = null;
//           this.router.navigate(['sign-in']);
//         }, 3000);
//       },
//       err => {
//         if (err.error.message) {
//           this.errorMessage = err.error.message;
//         }
//       }
//     );
//   } else { this.IsResetFormValid = false; }
// }


// resetPassword(email: string) {
//   var auth = firebase.default.auth();
//   return auth.sendPasswordResetEmail(email)
//     .then(() => console.log("email sent"))
//     .catch((error) => console.log(error))
// }

ForgotPassword(passwordResetEmail) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
    }
}
