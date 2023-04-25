import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';
import Swal from 'sweetalert2';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
productt:any;
cartItem:number=0;
price:number=0
login:any;
  uservalue: any;
  constructor(private product:ProductsService,private http:HttpClient){}
  ngOnInit():void{
    this.product.getcart().subscribe(res =>{
this.productt=res;
for(const i of this.productt ){
  this.price=this.price+i.price
}
    })
  }

  remove(data:any){
       Swal.fire({
    title: 'Do you want to remove the Product?',
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: 'Remove',
    denyButtonText: `Don't Remove`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire('Remove!', '', 'success').then((fun)=>{
        this.product.deletecart(data.id).subscribe(res =>{
        })
        location.reload()})
    } else if (result.isDenied) {
      Swal.fire('Product are not Removed', '', 'info')
    }
  })
  }

  plus(data:any){
    data.quantity++
     data.totalPrice=data.quantity*data.price
     this.product.updateCartData(data).subscribe(res=>{
      this.price=this.price+data.price
     });
  }

  minus(data:any){
    if(data.quantity>1)
    data.quantity--
    data.totalPrice=data.quantity*data.price
    this.product.updateCartData(data).subscribe(res=>{
      this.price=this.price-data.price
    })
  }

  place(){

  }
}
