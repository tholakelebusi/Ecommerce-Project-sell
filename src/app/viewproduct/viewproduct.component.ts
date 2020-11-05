import { Component, OnInit } from '@angular/core';
import { Bags } from '../bags';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.scss']
})
export class ViewproductComponent implements OnInit {
  edit_btn:boolean=false;
  viewpage:boolean=true;
  selectedBag:any

  constructor(private bagInfo:ProductService) {}

  ngOnInit():void {
    this.selectedBag = this.bagInfo.selectedProduct
 
    
  }


 

 productNames="";
  productPrice="";
  productDescrip="";
 productPics="";
  productid:number=1;
  dip1="";
 

  delete(index)
  {
  this.bagInfo.products.splice(index,1);
  console.log("deleted");
  }

updates()
{
 this.viewpage=false;
  if(
  this.bagInfo[this.productid-1].productName=this.productNames
  )
  console.log("d");
   

    {
      console.log("did not work");
    }
   
}

update(index)
{
  if(this.productNames=this.selectedBag[index].productName)
  {
    
  }
}
  
}
