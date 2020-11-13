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
    let message=""
    firebase.default.auth().createUserWithEmailAndPassword(user.email,user.password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message=errorMessage
    console.log(errorMessage);
  }).then( user =>{
    console.log(user);

    if(user){
      message = "successfully registered"
      console.log(message)
    }else{

    }

  });
}


signInUser(email,password){
  
  let user :any
    let message = ""
  firebase.default.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message = errorMessage
    // ...
  }).then(result =>{

    
    user = result

    if(user){
      message = user.user.email + " has successfully logged in"
      console.log(message);
    }else{

      console.log(message);
    }

    return user.user.email
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
