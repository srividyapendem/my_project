import { CommonService } from './common.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'employee';
  constructor(private _cs:CommonService){}


  loggedin(){

  console.log( 'login');

  }
  
  logoutUser() {

  console.log('logout');
  }
}
