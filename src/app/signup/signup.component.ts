import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signupform!:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router,private sign:ProductsService) { }


  ngOnInit(): void {
    this.signupform = this.formBuilder.group({
    name:['',Validators.required,Validators.pattern("[A-Z][a-z]+")],
    email:['',Validators.required,Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')],
    mobile:['',Validators.required],
    password:['',Validators.required,Validators.minLength(6),Validators.maxLength(10)]
  })
  }

  signup(data:any){ 
      this.sign.postsign(data).subscribe(res =>{
  //  console.log(res)
  Swal.fire('Registered Successfully')
  this.router.navigate(['/login'])
      },
      err =>{
        Swal.fire('Something went wrong')
      })
  }

}
