import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from './../common.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  public collection:any;
  public email:any;
  constructor(private commonService:CommonService ,private router:Router ,private route :ActivatedRoute) { }

  ngOnInit(): void {

    this.commonService.checkEmployeeExist(this.route.snapshot.params.email).
    subscribe((res)=>{this.collection=res
      console.log(this.collection);
    }
    );


}
logOut(){
  this.router.navigate(['/login']);
}

}

