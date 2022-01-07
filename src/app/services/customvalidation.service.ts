import { CommonService } from './../common.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {  AbstractControl } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class CustomvalidationService {

  constructor(private http : HttpClient,private cs : CommonService ){}

userNameValidator(userControl: AbstractControl) {
    return new Promise(resolve => {
      setTimeout(() => {
        if (this.validateUserName(userControl.value)) {
          resolve({ userNameNotAvailable: true });
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
  validateUserName(username: string) {
    const UserList = ['kiranmay@gmail.com','ankit@gmail.com' , 'ankitha@gmail.com' ];
    return (UserList.indexOf(username) > -1);
  }
}