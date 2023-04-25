import { Component } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { ProductsService } from '../services/products.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductviewComponent } from '../productview/productview.component';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  productt:any;
  categori:any;
  searchString='';

  constructor(private product:ProductsService,private http:HttpClient,public dialog: MatDialog){
  }


ngOnInit():void{

  this.product.search.subscribe(res=>{
    this.searchString=res
    // console.log(this.searchString);

  })




  this.product.getproduct().subscribe(res=>{
    this.productt=res
    // console.log(res)
  } )

}

addcart(data:any){
this.product.addtocart(data).subscribe(res =>{
  Swal.fire('Product added to cart').then(function(){
    location.reload();
  })
})
// console.log(data)
}

viewproduct(item:any){
  this.dialog.open(ProductviewComponent, {
    data: {
      title: item.title,
      image: item.image,
      price: item.price,
      description: item.description
    },
  });
}

getCat(data:any){
  // alert(data)
  this.http.get(`http://localhost:3000/product?category=`+data).subscribe(res=>{
    this.productt=res;
    // console.log(this.productt);

  })
}
}

