import { Component, OnInit } from '@angular/core';
import { Bags } from '../bags';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-updateinfo',
  templateUrl: './updateinfo.component.html',
  styleUrls: ['./updateinfo.component.scss']
})
export class UpdateinfoComponent implements OnInit {
  productName="";
    productPrice="";
    productDescrip="";
    productPic="";
    productid="";
    productBag=[];

    constructor(private bagInfo:ProductService) {}
    ngOnInit():void {
      this.productBag=this.bagInfo.products;
    }

  



}
