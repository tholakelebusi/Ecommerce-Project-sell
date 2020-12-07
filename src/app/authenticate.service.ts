import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import  firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { Authenticate } from './authenticate';


@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {
  userInfo:Authenticate;
  constructor(private db: AngularFirestore,
    public afAuth: AngularFireAuth) { }


  signUpUser(user)
  {
    var database = firebase.database();

    let message=""
    firebase.auth().createUserWithEmailAndPassword(user.email,user.password).catch((error) =>{
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    message=errorMessage
    console.log(errorMessage);
  }).then( results =>{
    console.log(results);

    if(results){
      message = "successfully registered"
      firebase.database().ref('users/' + results.user.uid).set({
        name: user.name,
        email: user.email,
       surname : user.surname,
       age:user.age,
       cellNo:user.cellNo
    
      });
      console.log(message);

    }else{

    }

  });
}


signInUser(email,password){
  
  let user :any
  let message = "";

  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) =>{
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

 resetPassword(email: string) {
   var auth = firebase.auth();
   return auth.sendPasswordResetEmail(email)
    .then(() => console.log("email sent"))
    .catch((error) => console.log(error))
 }

ForgotPassword(passwordResetEmail) {
      return this.afAuth.sendPasswordResetEmail(passwordResetEmail)
      .then(() => {
        window.alert('Password reset email sent, check your inbox.');
      }).catch((error) => {
        window.alert(error)
      })
    }



    logout(){
      firebase.auth().signOut().then(()  =>{
        // Sign-out successful.
        console.log("Sign-out successful.");
        
      }).catch(function(error) {
        console.log(error);
  
      });

}

//    this.userInfo = new Authenticate(userProfile.val().name,userProfile.val().surname,userProfile.val().email,userProfile.val().age, userProfile.val().cellNo);
getCurrentUser(){

  firebase.auth().onAuthStateChanged((users) =>{
    if (users) {
    //console.log(user)
      var userId = users.uid;
     firebase.database().ref('/users/' + userId).once('value').then( userProfile =>{
    this.userInfo = new Authenticate(userProfile.val().name,userProfile.val().surname,userProfile.val().email,userProfile.val().age, userProfile.val().cellNo)
     console.log(this.userInfo)
 
      })
     } else {
      console.log("user not logged in");
      
  }
  });

  
  
}



}
