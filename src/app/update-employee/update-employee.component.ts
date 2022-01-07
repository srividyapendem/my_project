
import { FormBuilder, FormControl, FormGroup,
   RequiredValidator, Validators } from '@angular/forms';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html'  
 ,
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  
  alert:boolean=false;
  public collection:any;
  submitted = false;
  get email() {
    return this.editEmployee.get('email') as FormControl;
  }
  get dob() {
    return this.editEmployee.get('dob') as FormControl;
  }
  get salary() {
    return this.editEmployee.get('salary') as FormControl;
  }


  constructor(private cs:CommonService,private fb:FormBuilder,private route:ActivatedRoute,private router:Router) { }
  editEmployee=this.fb.group({
    id:[''],
    firstName:[''],
    lastName:[''],
    email: ['',[Validators.required,Validators.email]],
    dob:['' ],
    salary:['',[Validators.required]],
  })

  ngOnInit(): void {

    this.cs.getCurrentEmployee(this.route.snapshot.params.id).subscribe((result:any)=>{
      this.editEmployee= new FormGroup({
        id: new FormControl(result['id']),
        firstName: new FormControl(result['firstName']),
        lastName: new FormControl(result['lastName']),
        email: new FormControl(result['email' ]),
        dob: new FormControl(result['dob']),
        salary: new FormControl(result['salary']),
      })
    })



  }

  updateEmployee(){
    this.cs.updateEmployee(this.route.snapshot.params.id,this.editEmployee.value).subscribe((result)=>{
      console.log(result,"update successfull");
      this.alert=true;
      this.editEmployee.reset({});
      this.router.navigate(['./list']);
     
    })
  }


  closeAlert(){
    this.alert =false;
  }

  onCancel(){
  this.router.navigate(['./list'])
  }

  logOut()
{
  this.router.navigate(['/login'])
}}



