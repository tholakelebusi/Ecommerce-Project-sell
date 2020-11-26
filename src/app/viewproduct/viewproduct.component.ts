import { Component, OnInit } from '@angular/core';
import { Bags } from '../bags';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  edit_btn: boolean = false;
  viewpage: boolean = true;
  selectedBag: any;

  product

  constructor(private bagInfo: ProductService, private router: Router) {
    this.router.getCurrentNavigation().extras.state
    this.product = history.state
  }

  ngOnInit(): void {
    this.selectedBag = this.bagInfo.selectedProduct
  }




  productNames = "";
  productPrice = "";
  productDescrip = "";
  productPics = "";
  productid: number = 1;
  dip1 = "";


  delete() {
    //console.log(index)
  //this.bagInfo.deleteProduct(index.productid)
    this.router.navigate(['/']);
  }

 

  viewinfo(product) {
    this.router.navigateByUrl('/update', { state: product });
  }

 


  deleting()
  {
    this.bagInfo.delete();
    console.log(this.bagInfo.delete());
  }




}
