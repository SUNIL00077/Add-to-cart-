import { Component } from '@angular/core';
import { EmailValidator, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../services/products.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uservalue:any;
  constructor(private fb:FormBuilder,private log:ProductsService,private http:HttpClient,private router:Router){}
hide = true;
loginform=new FormGroup({
  // 'name':new FormControl('',[Validators.required,Validators.pattern("[A-Z][a-z]+")]),
  'email':new FormControl('',[Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]),
  'password':new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)])
})

get email(){
  return this.loginform.get('email')
}
login(){
  this.http.get('http://localhost:3000/signup').subscribe(res =>{
       this.uservalue=res
    const user =  this.uservalue.find((a:any) =>{
      return a.email === this.loginform.value.email && a.password === this.loginform.value.password
    })
 if(user){
  Swal.fire('Successfully Logged in..!')
  this.loginform.reset();
  this.router.navigate(['/product'])
 }else{
  Swal.fire('User not found with these credentials...')
 }

  },
  err =>{
  Swal.fire('Something Went wrong')
  })
  // console.log(this.loginform.value)
  this.log.logindata(this.loginform.value).subscribe(res=>{})
}



}


