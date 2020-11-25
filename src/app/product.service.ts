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
  products:Bags[]=[];
 
  /**products:Bags[] = [
    {
      productPic:"https://i.pinimg.com/originals/a2/3c/c2/a23cc281cf814ec1bdeda3a1c6ce95c0.jpg",
        productName: "Colene Woven Leather",
        productPrice: "Price:R3450",
        productDescrip:"ee",productid:1,sizes:"76cm / 30 inches"
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
        productDescrip:"ee",productid:3,sizes:"76cm / 30 inches"
    },
    {
      productPic:
        "https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        productName: "Gabe backpack",
        productPrice: "Price:R750",
        productDescrip:"eee",productid:4,sizes:"76cm / 30 inches"
    }
  ];
*/
product: any = []
getProducts() {
  this.db.collection("leatherBags").snapshotChanges().subscribe(results => {
    results.forEach((doc) => {
      this.product.push(doc.payload.doc.data())
      this.product.map(prod => {
        prod['id'] = doc.payload.doc.id;
      })
     // console.log(this.product);
    });
  });
  return this.product
}


  getAllBags()
  {


    return this.db.collection("leatherBags").snapshotChanges();
    
    /**this.db.collection("eatherBags").snapshotChanges().subscribe(results=>{
      results.forEach((doc)=>{
        this.products.push(doc.payload.doc.data())
        this.products.map(prod=>{
          prod['id']=doc.payload.doc.id;
        })
       
        console.log(this.products);
    
    });
  });*/


  //console.log(this.products);
  }

 getBags() {

  return this.products;
 }
 


/** 
addBags(addmorebags:Bags) {

      let productid=Math.floor(Math.random()*100);
  this.db.collection("leatherBags").doc(productid.toString()).set({
    productName :addmorebags.productName,
    productPrice: addmorebags.productPrice,
    productPic: addmorebags.productPic,
    productDescrip: addmorebags.productDescrip,
    sizes : addmorebags.sizes
  })
    .then(function () {
      console.log("Document successfully written!");
    })
    .catch(function (error) {
      console.error("Error writing document: error");
    });
}

*/

addBagss(addmorebags:Bags) {

  
this.db.collection("leatherBags").add({
productName :addmorebags.productName,
productPrice: addmorebags.productPrice,
productPic: addmorebags.productPic,
productDescrip: addmorebags.productDescrip,
sizes : addmorebags.sizes
})
.then(function () {
  console.log("Document successfully written to firebase!");
})
.catch(function (error) {
  console.error("Error writing document: error");
});
}

/**
addBag(bagData : Bags) {
    console.log(bagData);

      bagData.productid = this.products.length + 1;

      this.products.push(bagData);
      
 deleteProduct(id: number) {
  const product = this.products.findIndex(c => c.productid == id);
   if (product >-1) {
  this.products.splice(product,1);

}



}

}

*/

updateProduct(bag : Bags){
  console.log(bag.productid);
  const index = this.products.findIndex(c => c.productid === bag.productid);
   if ( index  >-1) {
  this.products[index] = bag;
   }


  }


  //deleting


  delete()
  {
  
  this.db.collection("leatherBags").doc(this.selectedProduct.productid).delete().then(function() {
    console.log("Document successfully deleted!!");
 }).catch(function(error) {
   console.error("Error removing document: ", error);
});
  }



updateDetails(productId :string, products: Bags )
{
  //  console.log("Error removing document: ");
   console.log(productId)
      // delete this.selectedProduct.productid;
      // this.db.doc(this.selectedProduct.productid + this.selectedProduct.productid).update(this.products);
      return this.db.doc("leatherBags/"+ productId).update(products)


//       update(productId :string , product : Product) {
//         console.log(productId);
//         return this.db.doc("products/" +productId).update(product);
//       }      
// }



}


}


