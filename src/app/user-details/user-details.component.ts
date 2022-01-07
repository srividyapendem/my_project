import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  alert:boolean=false;
  public collection:any;
  emailId: any;
  get email() {
    return this.detailsEmployee.get('email') as FormControl;
  }
  get dob() {
    return this.detailsEmployee.get('dob') as FormControl;
  }
  get salary() {
    return this.detailsEmployee.get('salary') as FormControl;
  }

  constructor(private cs:CommonService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router) { }
  
  detailsEmployee=this.fb.group({
    id:[''],
    firstName:[''],
  lastName:[''],
  email:[''],
  dob:[''],
  salary:['']
  })
  ngOnInit(): void {


    this.cs.getCurrentEmployee(this.route.snapshot.params.id).subscribe((result:any)=>{
      this.detailsEmployee= new FormGroup({
id: new FormControl(result['id']),
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        email: new FormControl(result['email']),
        dob: new FormControl(result['dob']),
        salary: new FormControl(result['salary']),
      })
    })
    


  }


 userDetails(){
    this.cs.updateEmployee(this.route.snapshot.params.id,this.detailsEmployee.value)
    .subscribe((result:any)=>{
      console.log(result,"user details");
      this.alert=true;
      this.detailsEmployee.reset({});
    /*  this.router.navigate(['./userList/:id']); 
    */
     
    });
  
   
  }

 
   

  
  closeAlert(){
    this.alert =false;
  }

  onCancel(){
  /*this.router.navigate(['./userList/:id'])  */
  this.router.navigate(['/login']);
  }
 

  logOut(){
    this.router.navigate(['/login']);
  }
  
}

    


