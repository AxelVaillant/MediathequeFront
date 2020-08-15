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


const routes: Routes = [
{
  path:"user/save",
  component:CreateUserComponent
},
{
  path:"role/save",
  component:CreateRoleComponent
},
{
  path:"user",
  component:ListUserComponent
},
{
  path:"role",
  component:ListRoleComponent
},
{
  path:"user/update/:id",
  component:UpdateUserComponent
},
{
  path:"home",
  component:HomeComponent
},
{
  path:"livre/save",
  component:CreateLivreComponent
},
{
  path:"livre",
  component:ListLivreComponent
},

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
