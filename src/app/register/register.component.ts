import { FormBuilder } from '@angular/forms';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

alert=false;
  constructor(private cs:CommonService,private fb:FormBuilder) { }
registerEmployee=this.fb.group({
  empName:[''],
  password:[''],
  email:['']
})

  ngOnInit(): void {
  }

  userRegister(){
   this.cs.regEmployee (this.registerEmployee.value).subscribe((result)=>{
     console.log(result,"user register successfull");
     this.alert =true;
   })
  }

  createAlert(){
    this.alert=false;
  }
}
