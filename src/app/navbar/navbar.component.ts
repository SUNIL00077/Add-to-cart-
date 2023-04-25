import { Component } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  cartItem:number=0
  data:any=[];
  constructor(private http:ProductsService){
  this.http.getcart().subscribe(res =>{
        this.data=res;
        // console.log(this.data.length)
       this.cartItem=this.data.length;
  })
  }
  search(event:any){
    this.http.getSearchString(event.target.value)

  }
}
