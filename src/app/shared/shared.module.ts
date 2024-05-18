import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavigatorComponent } from './navigator/navigator.component';



@NgModule({
  declarations: [
    NavigatorComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavigatorComponent
  ]
})
export class SharedModule { }
