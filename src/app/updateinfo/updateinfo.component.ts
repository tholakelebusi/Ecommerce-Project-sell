import { Component, OnInit } from '@angular/core';
import { Bags } from '../bags';
import { ProductService } from '../product.service';
import { FormGroup, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';


@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.scss']
})
export class UpdateinfoComponent implements OnInit {

  product

  productBag = [];
  selectedBag: any;

  public contactForm: FormGroup;

  constructor(private bagInfo: ProductService, private _FormBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.selectedBag = this.bagInfo.selectedProduct
    console.log(this.selectedBag.productName);
 
    


    this.contactForm = this._FormBuilder.group({
      productName: [this.selectedBag.productName],
      productPrice: [this.selectedBag.productPrice],
      productDescrip: [this.selectedBag.productDescrip],
      productPic : [this.selectedBag.productPic]

    })
  }


  onSubmit() {
  
    console.log( this.contactForm.value);
    this.bagInfo.updateProduct( this.contactForm.value);
    this.router.navigate(['']);

  }



}
