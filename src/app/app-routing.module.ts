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
  },
  {
    path: 'call-page',
    loadChildren: () => import('./pages/call-page/call-page.module').then(m => m.CallPageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'home-page',
    loadChildren: () => import('./pages/home-page/home-page.module').then(m => m.HomePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'resume-page',
    loadChildren: () => import('./pages/resume-page/resume-page.module').then(m => m.ResumePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: 'student-profile-page',
    loadChildren: () => import('./pages/student-profile-page/student-profile-page.module').then(m => m.StudentProfilePageModule),
    canActivate: [AuthGuard] 
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login' // Redireciona para a página de login se o caminho for vazio
  },
  { 
    path: '**', 
    redirectTo: '/login' // Redireciona para a página de login se a rota não for encontrada
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
