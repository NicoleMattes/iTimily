import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallPageComponent } from './pages/call-page/call-page.component';
import { AuthGuard } from './AuthGuard ';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ResumePageComponent } from './pages/resume-page/resume-page.component';
import { StudentProfilePageComponent } from './pages/student-profile-page/student-profile-page.component';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },{
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },  {
    path: 'call-page',
    component: CallPageComponent,
  },
  {
    path: 'home-page',
    component: HomePageComponent,
  },
  {
    path: 'resume-page',
    component: ResumePageComponent,
  },
  {
    path: 'students-page',
    loadChildren: () => import('./pages/student-profile-page/student-profile-page.module').then(m => m.StudentProfilePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
