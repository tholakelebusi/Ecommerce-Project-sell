import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, Route } from "@angular/router";
import { Observable } from 'rxjs';
import { Bags } from '../bags';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productBag=[];
  infor: boolean = false;
  addform:boolean=false;
  homeView:boolean=true;
  btn_add:boolean=true;
  moreinfor:boolean=false;

  Products:Observable<any[]>

  
  constructor(private bagInfo:ProductService,  private router: Router) {}

  

  ngOnInit():void {
    this.productBag=this.bagInfo.products;
   this.getAll

  }

  viewProduct(pro) {
   
  //  this.moreinfor=true;
  this.bagInfo.selectedProduct = pro
    this.router.navigate(['/view']);

    
  }

  get  getAll() {
   return this.bagInfo.getBags();

  }

  openForm()
{
  this.homeView=false;
  this.addform=true;
  this.btn_add=false;
  
}

productName = "";
productPrice = "";
productDescrip = "";
productPic = "";
productid = "";




/*
getData()
{
 
  
  this.Products=this.bagInfo.getAllBags();
  console.log("data retrieved");
}
*/

  










}

