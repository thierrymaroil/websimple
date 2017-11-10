import { LoginComponent } from './user/login/login.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './contents/home/home.component';
import { ContactComponent } from './contents/contact/contact.component';
import { Page1Component } from './contents/page1/page1.component';
import { Page2Component } from './contents/page2/page2.component';
import { Page3Component } from './contents/page3/page3.component';
import { MenuComponent } from './menu/menu.component';
import { ContentsComponent } from './contents/contents.component';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'contents/home', pathMatch: 'full'},
  {path: 'contents/home', component : HomeComponent},
  {path: 'contents/contact', component : ContactComponent},
  {path: 'contents/page1', component : Page1Component},
  {path: 'contents/page2', component : Page2Component},
  {path: 'contents/page3', component : Page3Component}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    Page1Component,
    Page2Component,
    Page3Component,
    MenuComponent,
    ContentsComponent,
    LoginComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
