import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, catchError, map, of } from 'rxjs';
import { ProductsService } from './services/products.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor(private product:ProductsService,private router:Router){}

canActivate() {
return true
}

}
