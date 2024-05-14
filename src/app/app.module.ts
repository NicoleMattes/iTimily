import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { CallPageComponent } from './pages/call-page/call-page.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CallPageComponent,
    StudentProfilePageComponent,
    ResumePageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
