import { Component,Inject } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProductsService } from '../services/products.service';

export interface DialogData {
  title:string;
  image:string;
  price:string;
  description:string;
}
@Component({
  selector: 'app-productview',
  templateUrl: './productview.component.html',
  styleUrls: ['./productview.component.css']
})
export class ProductviewComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData,private cart:ProductsService) {}

  addcart(data:any){
    this.cart.addtocart(data).subscribe(res =>{

    })
  }

}
