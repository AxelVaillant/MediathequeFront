import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { HomeComponent } from './home/home.component';
import { CreateLivreComponent } from './create-livre/create-livre.component';
import { ListLivreComponent } from './list-livre/list-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { AuthGuardService } from './Service/auth-guard.service';
import { RoleGuardService } from './Service/role-guard.service';
import { LoginComponent } from './login/login.component';
import { ListNotifComponent } from './list-notif/list-notif.component';


const routes: Routes = [
{
  path:"user/save",
  component:CreateUserComponent
},
{
  path:"role/save",
  component:CreateRoleComponent,
  canActivate :[RoleGuardService]
},
{
  path:"user",
  component:ListUserComponent,
  canActivate :[RoleGuardService]
},
{
  path:"role",
  component:ListRoleComponent,
  canActivate :[RoleGuardService]
},
{
  path:"user/update/:id",
  component:UpdateUserComponent,
  canActivate :[RoleGuardService]
},
{
  path:"home",
  component:HomeComponent
},
{
  path:"livre/save",
  component:CreateLivreComponent,
  canActivate :[RoleGuardService]
},
{
  path:"livre",
  component:ListLivreComponent,
  canActivate:[AuthGuardService]
},
{
  path:"livre/update/:id",
  component:UpdateLivreComponent,
  canActivate :[RoleGuardService]
},
{
  path:"user/login",
  component:LoginComponent
},
{
  path:"notification",
  component:ListNotifComponent,
  canActivate :[RoleGuardService]
}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
