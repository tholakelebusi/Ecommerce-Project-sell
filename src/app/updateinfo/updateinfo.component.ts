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
  productName = "";
  productPrice = "";
  productDescrip = "";
  productPic = "";
  productid = "";
  productBag = [];
  selectedBag: any;

  public contactForm: FormGroup;

  constructor(private bagInfo: ProductService, private _FormBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.selectedBag = this.bagInfo.selectedProduct
    console.log(this.selectedBag);
    this.router.getCurrentNavigation().extras.state
    this.product = history.state;
    this.contactForm = this._FormBuilder.group({
      productName:[this.selectedBag.productName],
      productPrice: "",
      productDescrip: "",
      productPic: "",
      productid: "",
      sizes: ""
    })
  }



  update(updating: Bags) {
    const index = this.productBag.findIndex(c => c.productid === updating.productid);
    if (index > -1) {
      this.productBag[index] = updating;
    }
  }




}
