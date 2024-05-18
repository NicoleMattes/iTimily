import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfilePageComponent } from './student-profile-page.component';
import { StudentRouterModule } from './student-profile-page-routing.module';
import {MatButtonModule} from '@angular/material/button';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentProfilePageComponent
  ],
  imports: [
    CommonModule,
    StudentRouterModule,
    MatButtonModule,
    SharedModule
  ]
})
export class StudentProfilePageModule { }
