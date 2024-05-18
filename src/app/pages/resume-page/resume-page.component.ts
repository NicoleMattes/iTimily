import { Component } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent {
  displayedColumns: string[] = ['name', 'totalAbseces', 'totalPresence', 'status'];
  dataSource = STUDENT_DATA;

}

const STUDENT_DATA: student[] = [
  {name: 'Nicole Mattes', totalAbseces: 0, totalPresence: 100, status: 'Aprovada'},
  {name: 'Lucas Canno', totalAbseces: 100, totalPresence: 0, status: 'Reprovado'},
];

export interface student {
  name: string;
  totalAbseces: number;
  totalPresence: number;
  status: string;
}
