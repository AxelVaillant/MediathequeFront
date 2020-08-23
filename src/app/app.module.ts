import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateRoleComponent } from './create-role/create-role.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListRoleComponent } from './list-role/list-role.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { CreateLivreComponent } from './create-livre/create-livre.component';
import { ListLivreComponent } from './list-livre/list-livre.component';
import { UpdateLivreComponent } from './update-livre/update-livre.component';
import { LoginComponent } from './login/login.component';
import { ListNotifComponent } from './list-notif/list-notif.component';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
registerLocaleData(localeFr, 'fr');
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    CreateUserComponent,
    CreateRoleComponent,
    ListUserComponent,
    ListRoleComponent,
    UpdateUserComponent,
    CreateLivreComponent,
    ListLivreComponent,
    UpdateLivreComponent,
    LoginComponent,
    ListNotifComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
