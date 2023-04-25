import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public search =new Subject<any>;

  constructor(private http:HttpClient) { }

  getproduct(){
    return this.http.get('https://fakestoreapi.com/products')
  }

  addtocart(data:any){
    return this.http.post('http://localhost:3000/cart',data)
    // console.log(data)
  }

  getcart(){
   return this.http.get('http://localhost:3000/cart')
  }

  deletecart(id:number){
   return this.http.delete('http://localhost:3000/cart/'+id)
  }

  // forserchh
  getSearchString(searchString:any){
    this.search.next(searchString)
}

updateCartData(data:any){
  return this.http.put(`http://localhost:3000/cart/${data.id}`,data)
}

// signup
postsign(data:any){
  return this.http.post('http://localhost:3000/signup',data)
}
login(){
  return this.http.get('http://localhost:3000/signup')
}

// for admin
postadmin(data:any){
  return this.http.post('http://localhost:3000/admin',data)
}

//auth
logindata(data:any)
{
return this.http.post('http://localhost:3000/login',data)

}

}
