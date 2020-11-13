import { Component, OnInit } from '@angular/core';
import { Bags } from '../bags';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.scss']
})
export class AddproductComponent implements OnInit {

  public contactForm: FormGroup;

  productBag = [];
  infor: boolean = false;
  addform: boolean = false;
  homeView: boolean = true;
  btn_add: boolean = true;

  constructor(private bagInfo: ProductService, private _FormBuilder: FormBuilder, private  router: Router) { }



  ngOnInit(): void {
    this.productBag = this.bagInfo.products;
    this.contactForm = this._FormBuilder.group({
      productName: "",
      productPrice: "",
      productDescrip: "",
      productPic: "",
      productid: "",
      sizes: ""
    })
  }

  details() {
    this.infor = true;
  }







  Products: Bags[] = [];

  openForm() {
    this.homeView = false;
    this.addform = true;
    this.btn_add = false;
  }


  productName = "";
  productPrice = "";
  productDescrip = "";
  productPic = "";
  productid = "";


  /*addBag() {

    const newProductss = {
      "productName": this.productName,
      "productPrice": this.productPrice,
      "productDescrip": this.productDescrip,
      "productPic": this.productPic,
      "productid": this.productid
    };

    this.productBag.push(newProductss);
    this.homeView = true;
    this.addform = false;

    //addBags
    this.bagInfo.addBags(this.contactForm.value);
    console.log("submitted");

  }
  */

  onSubmit() {
 
     this.bagInfo.addBagss(this.contactForm.value);
     
  this.router.navigate(['/']);
    
  }
}





