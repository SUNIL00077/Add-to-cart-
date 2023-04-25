import { Component,OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
productt:any;
constructor(private product:ProductsService){ }
ngOnInit():void{
  this.product.getproduct().subscribe(res=>{
    this.productt=res
    console.log(res)
  } )
}
}

