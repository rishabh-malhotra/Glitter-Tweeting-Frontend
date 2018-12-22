import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import { ApiService } from './api.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';
import { Routes, RouterModule} from '@angular/router';
import { HttpClient } from 'selenium-webdriver/http';

const appRoutes:Routes=[
  {
    path: 'signup',
    component: SignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'Play-Ground',
    component: PlayGroundComponent,
    pathMatch: 'full'
  },
  {
    path: 'Followers',
    component: FollowersComponent,
    pathMatch: 'full'
  },
  {
    path: 'Following',
    component: FollowingComponent,
    pathMatch: 'full'
  },
  {
    path: 'Search',
    component: SearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    pathMatch: 'full'
  }];

  


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    PlayGroundComponent,
    HeaderComponent,
    SearchComponent,
    FollowersComponent,
    FollowingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
