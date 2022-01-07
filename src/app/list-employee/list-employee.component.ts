import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-employee',
  templateUrl: './list-employee.component.html',
  styleUrls: ['./list-employee.component.css']
})
export class ListEmployeeComponent implements OnInit {

 public collection:any;
 alert=false;
 popoverTitle = 'Delete Confirmation';
 popoverMessage = 'Do you Really want to delete ?';
 yesClicked = false;
 cancelClicked = false;
 get firstName() {
  return this.addEmployee.get('firstName') as FormControl;
}

 get email() {
  return this.addEmployee.get('email') as FormControl;
}
get dob() {
  return this.addEmployee.get('dob') as FormControl;
}
get salary() {
  return this.addEmployee.get('salary') as FormControl;
}
get password() {
  return this.addEmployee.get('password') as FormControl;
}
  constructor(private cs:CommonService 
    ,private router:Router , 
    private fb : FormBuilder) { }

  ngOnInit(): void {

    this.cs.getEmployees().subscribe((res)=>{
      this.collection=res
      console.log(this.collection);
     
    }
    );

  
  
  }

  addEmployee=this.fb.group({
    firstName:['',Validators.required ],
    lastName:['', Validators.required ],
    email:['' ,[Validators.required ,Validators.email]],
    password:['' ,[Validators.required]],
    dob:['' ,[Validators.required]],
    salary:['' ,[Validators.required]]
  })

  
  onSubmit(){
    this.cs.addEmployee
    (this.addEmployee.value).
    subscribe((res)=>{
      
 console.log("Get data from service" 
 ,res)
        
      alert("employee added successfully")  
         let ref = document.getElementById('cancel')
             ref?.click();
  
      },
     err => {
     alert("something went wrong")
     }
  
      )
      this.addEmployee.reset({});
     
      this.router.navigate(['./list']);
      this.ngOnInit()
     }

  deleteEmployee(employee:any){
    this.collection.splice(employee.id,-1)
    this.cs.deleteEmployee(employee).subscribe((res)=>{
      console.log("data deleted successfully!",res);
      this.alert=true;
      this.ngOnInit();
      
    })


  }


  

    
  
    closeAlert(){
      this.alert=false;
    }

    logOut(){
      this.router.navigate(['/login'])
    }
  
}
