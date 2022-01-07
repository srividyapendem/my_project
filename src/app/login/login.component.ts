
import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { Router } from '@angular/router';
import { User } from '../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  alert:boolean = false;
  username!:string ;
  password!:string;
  loginError:boolean = true;
 

  constructor(private cs:CommonService, private router:Router) { }

  ngOnInit(): void {
    
    }
    logIn(){
      this.cs.authenticate(this.username ,this.password).subscribe((result:any) =>{
        
        console.log('response: '+ result.length);
        if(result && result.length == 1) {
          this.loginError = true;
          if(result[0].isAdmin) {
            this.router.navigate(['./list/'])
          } else{
            this.router.navigate(['./userList/'+result[0].username]);
          }
         
    
        }
        else{
       console.log('username or password incorrect');
          this.loginError = false;
      
        }
      });
    
  }
 

    
    }


    


   

  
