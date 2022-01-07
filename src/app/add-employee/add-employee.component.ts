import { Router } from '@angular/router';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  alert:boolean=false;

  constructor(private cs:CommonService,private fb:FormBuilder,private router:Router) { }
addEmployee=this.fb.group({
  firstName:[''],
  lastName:[''],
  email:[''],
  password:[''],
  dob:[''],
  salary:['']
})

loginEmployee =this.fb.group({
  username:[''],
  isAdmin:['false']
})
  ngOnInit(): void {
  
  }
onSubmit(){
  this.cs.addEmployee(this.addEmployee.value).
  subscribe((res)=>{
    var loginUser =  {};
    this.router.navigate(['./list']);

        console.log("Get data from service" ,res)
      
    alert("employee added successfully")  
       let ref = document.getElementById('cancel')
           ref?.click();

    },
   err => {
   alert("something went wrong")
   }

    )
  
   }

}
