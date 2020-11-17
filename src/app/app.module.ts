import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatGridListModule } from "@angular/material/grid-list";
import { RouterModule } from "@angular/router";
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from '../environments/environment';

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { ProductService } from './product.service';
import { AuthenticateService } from './authenticate.service';

import { ArrivalsComponent } from './arrivals/arrivals.component';
import { ChildBagsComponent } from './child-bags/child-bags.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ProfileComponent } from './profile/profile.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddproductComponent,
    HomeComponent,
    ViewproductComponent,
    UpdateinfoComponent,
    ArrivalsComponent,
    ChildBagsComponent,
    ResetPasswordComponent,
    ProfileComponent
  
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    AppRoutingModule,
    RouterModule,
    MatGridListModule,
    ReactiveFormsModule,AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule,
      AngularFirestoreModule,
  ],
  providers:[ProductService],
   schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
