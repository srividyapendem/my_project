import { UserEditComponent } from './user-edit/user-edit.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListEmployeeComponent } from './list-employee/list-employee.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';

const routes: Routes = [
  {path:'' , redirectTo:'/login',pathMatch:'full'},

  {path:"update/:id", component:UpdateEmployeeComponent},
  {path:"list",
   component:ListEmployeeComponent,
   children:[ {path:"add", component:AddEmployeeComponent}]
}
  
  ,
  {path:"login", component:LoginComponent},
  {path:"details/:id", component:UserDetailsComponent},
  {path:"userList/:email", component:UserEditComponent,
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
