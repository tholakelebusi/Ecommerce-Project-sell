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
  data: any;

  public contactForm: FormGroup;

  constructor(private bagInfo: ProductService, private _FormBuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {
    this.selectedBag = this.bagInfo.selectedProduct

 
    


    this.contactForm = this._FormBuilder.group({
      productid :[this.selectedBag.productid],
      productName: [this.selectedBag.productName],
      productPrice: [this.selectedBag.productPrice],
      productDescrip: [this.selectedBag.productDescrip],
      productPic : [this.selectedBag.productPic]

    })
  }


  onSubmit() {
  
  
    this.bagInfo.updateDetails(this.selectedBag.productid,this.contactForm.value);
    this.router.navigate(['']);


  }
  
  // onSubmit() {
  //   // this._productService.editProduct(this.contactForm.value);
  //   this._productService.update(this.data.id,this.contactForm.value);
  //   this.dialogRef.close();
  // }

  
  // updating()
  // {
  // this.bagInfo.updateDetails();
  // this.router.navigate(['']);
  // console.log("hereee");
  // }



}
