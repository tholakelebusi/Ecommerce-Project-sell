import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommonModule } from "@angular/common";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
import { AddproductComponent } from "./addproduct/addproduct.component";
import {HomeComponent} from "./home/home.component";
import { ViewproductComponent } from './viewproduct/viewproduct.component';
import { UpdateinfoComponent } from './updateinfo/updateinfo.component';
;

const routes: Routes = [
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "Addproduct",
    component: AddproductComponent
  },
  {
    path: "view",
    component:ViewproductComponent
    },
  {
  path:"",
  component:HomeComponent
  },
  {
    path:"update",
    component:UpdateinfoComponent
  }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
