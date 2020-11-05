import { Injectable } from '@angular/core';
import {Bags} from './bags';
import { AngularFirestore } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  selectedProduct :Bags
  
  constructor(private db: AngularFirestore) { }

  products:Bags[] = [
    {
      productPic:"https://i.pinimg.com/originals/a2/3c/c2/a23cc281cf814ec1bdeda3a1c6ce95c0.jpg",
        productName: "Colene Woven Leather",
        productPrice: "Price:R3450",
        productDescrip:"ee",productid:2,sizes:"76cm / 30 inches"
    },
    {
      productPic:
        "https://cdn.shopify.com/s/files/1/0267/6758/9428/files/mobile-size-2_x800.jpg?v=1593084800",
        productName: "womens leather ",
        productPrice: "Price:R770",
        productDescrip:"eeee",productid:2,sizes:"76cm / 30 inches"
    },
    {
      productPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSWUH3ujfg1tlGs_u2zFoW1jzKiUAyCZ-i2w&usqp=CAU",
        productName: "Gabe backpack",
        productPrice: "Price:R1750",
        productDescrip:"ee",productid:2,sizes:"76cm / 30 inches"
    },
    {
      productPic:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productName: "Gabe backpack",
        productPrice: "Price:R750",
        productDescrip:"eee",productid:2,sizes:"76cm / 30 inches"
    }
  ];



  getAllBags()
  {
    
    return this.db.collection("leatherBags").valueChanges();
   
  }




addBags(addmorebags:Bags) {

      let productid=Math.floor(Math.random()*100);
  this.db.collection("leatherBags").doc(productid.toString()).set({
    addmorebags
  })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: error");
    });
}





}
