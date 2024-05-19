import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { CompleteUserModel } from 'src/app/models/complete-user.model';
import { AuthService } from 'src/app/services/AuthService';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit{
  actualRoute = '/';
  homeBtnActive = false;
  profileBtnActive = false;
  studentsBtnActive = false;
  isMenuOpen = false;
  professor!: CompleteUserModel;

  constructor(public authService: AuthService, private router: Router, private storageService: StorageService) {

  }
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  ngOnInit() {
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.getProfessor();
      this.actualRoute = event.url;
      this.activeBtnByRoute();
    });
  }

  getProfessor() {
    this.professor = this.storageService.COMPLETE_USER
  }

  goToPage(route: string) {
    this.router.navigate([route]);
  }

  activeBtnByRoute() {
    switch(this.actualRoute) {
      case '/home-page':
        this.homeBtnActive = true;
        this.profileBtnActive = false;
        this.studentsBtnActive = false;
        break;
      case '/resume-page':
        this.homeBtnActive = false;
        this.profileBtnActive = true;
        this.studentsBtnActive = false;
        break;
      case '/students-page':
        this.homeBtnActive = false;
        this.profileBtnActive = false;
        this.studentsBtnActive = true;
        break;
      default:
        this.homeBtnActive = false;
        this.profileBtnActive = false;
        this.studentsBtnActive = false;
        break;
    }
  }

}
