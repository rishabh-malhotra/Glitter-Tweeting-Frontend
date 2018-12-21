import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayGroundComponent } from './play-ground/play-ground.component';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { FollowersComponent } from './followers/followers.component';
import { FollowingComponent } from './following/following.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
