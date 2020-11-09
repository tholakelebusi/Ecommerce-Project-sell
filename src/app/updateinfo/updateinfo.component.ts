import { Component, OnInit } from '@angular/core';
import { Bags } from '../bags';
import { ProductService } from '../product.service';
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

  constructor(private bagInfo: ProductService, private router: Router) { }
  ngOnInit(): void {
    this.productBag= this.bagInfo.products;

    this.router.getCurrentNavigation().extras.state
    this.product = history.state
  }



  update(updating: Bags) {
    const index = this.productBag.findIndex(c => c.productid === updating.productid);
    if (index > -1) {
      this.productBag[index] = updating;
    }
  }




}
