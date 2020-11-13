import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-bags',
  templateUrl: './child-bags.component.html',
  styleUrls: ['./child-bags.component.scss']
})
export class ChildBagsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  products=[
    {
      productPic:"https://i.pinimg.com/236x/0e/a6/77/0ea67746032b92617a7074fbabb94f0a--nappy-bags-cobalt-blue.jpg",
        productName: "https://m.media-amazon.com/images/I/61s1cGy3rOL._AC_UL320_.jpg",
        productPrice: "https://images-na.ssl-images-amazon.com/images/I/61355ZvyVrL._SY355_.jpg",
        productDescrip:"https://images-na.ssl-images-amazon.com/images/I/71vaZ4y2r2L._UL1200_.jpg",productid:1,sizes:"https://images-na.ssl-images-amazon.com/images/I/61ik1XMJGoL._SX466_.jpg"
    },
    {
      productPic:"https://i.pinimg.com/originals/2d/89/67/2d8967a3e580dea09b742ceb9ea32695.jpg",
        productName: "https://jeankelly.co.za/wp-content/uploads/2018/06/products-jeankelly6-600x600.jpg",
        productPrice: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTMFtRoKp3Z0M4Kk-gfCR9yWW_IokTKCV7QuQ&usqp=CAU",
        productDescrip:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQm5HSV6YXkeUQv_TNyz0SEzPXoGfAfNAmjew&usqp=CAU",productid:1,sizes:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRrSpoCskb8qD465y60AZETyUZVj1QPGROKtw&usqp=CAU"
    },
    {
      productPic:"https://i57.photobucket.com/albums/g240/lizcoolmompicks/6474_accessories_for_web.jpg",
        productName: "https://lullabuybabies.co.za/wp-content/uploads/2020/04/faux-leather-Diaper-Bag-Baby-Nappy-Backpack.jpg",
        productPrice: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ540LJqwOFImMLue3Vy3PS3-ORTYP8HbxrPQ&usqp=CAU",
        productDescrip:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSV41tGX-JshNbPGjvA3oR199sINDMtocbOnQ&usqp=CAU",productid:1,sizes:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSJv8-mW6UpE6XymVOP5x9bC0ujtAd8S2HaIg&usqp=CAU"
    }
  ]
}
