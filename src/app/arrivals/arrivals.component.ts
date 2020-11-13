import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.scss']
})
export class ArrivalsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



  products=[
    {
      productPic:"https://i.pinimg.com/originals/2d/89/67/2d8967a3e580dea09b742ceb9ea32695.jpg",
        productName: "https://image.made-in-china.com/202f0j00rpQfzhTPjebu/New-Design-PU-Leather-Fashion-Handbag-2019-Designer-Bags-for-Ladies-Bags-Women-Handbag.webp",
        productPrice: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQSRjyta265qADlb4wTygHBXyRs3EXQ-6LCzQ&usqp=CAU",
        productDescrip:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRyHeAtQUv3SUOqaUfovKo4JWbrp-qwwR-SmA&usqp=CAU",productid:1,sizes:"https://5.imimg.com/data5/QH/LB/GH/SELLER-75105030/ladies-fancy-bag-500x500.jpg"
    },
    {
      productPic:
        "https://images-na.ssl-images-amazon.com/images/I/41Gg845AQ1L.jpg",
        productName: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS8meNRheljPnrFoGqVXgv7TxD8ZMO8ODVuFQ&usqp=CAU",
        productPrice: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTPPFEiCg8TUcBz3fL19YB16zEoXG87_4vzhg&usqp=CAU",
        productDescrip:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQZGywRcAeIjweM4IsH1L4N9BJiT6zX6pP26A&usqp=CAU",productid:3,sizes:"https://images-na.ssl-images-amazon.com/images/I/71ejwh9ZVYL._SL1500_.jpg"
    },
    {
      productPic:
        "https://ae01.alicdn.com/kf/HTB18bHNyH5YBuNjSspoq6zeNFXaO.jpg_q50.jpg",
        productName: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHtTQpyc4imhviuJyNGWn9YgCs85eW-CIr-A&usqp=CAU",
        productPrice: "https://ae01.alicdn.com/kf/HTB1BL_aSXXXXXa8XXXXq6xXFXXXs/Bolso-Mujer-2017-Fashion-Hobos-Women-White-Bag-Ladies-Brand-Leather-Handbags-Spring-Casual-Tote-Bag.jpg",
        productDescrip:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsM0SAc7fzNjAv2k5ZjHYayZJg19WHX4K1ig&usqp=CAU",productid:4,sizes:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRzdQetEqmg-ZCZxUG_30Y3Hf-JlREsv0Fc0A&usqp=CAU"
    },
    {
      productPic:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSHOm3vvexjVj3UkoyR5QcI4XhwiA-c6hhHNg&usqp=CAU",
        productName: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcCZmjB1KgRXCvkAmo8JytoxXIfdzLBpmzaQ&usqp=CAU",
        productPrice: "https://5.imimg.com/data5/YW/FK/MY-16269511/leather-fashion-handbags-500x500.jpg",
        productDescrip:"https://i.ezbuy.sg/FppMqL76o9iPrjEmgNkDIaeB9MNA?imageView2/2/w/600/h/600/q/90/format/webp",productid:4,sizes:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQlzBKVdXYDhRN-vxh0wjyWN4WNH3bDm0tn7A&usqp=CAU"
    }
  ];



}
