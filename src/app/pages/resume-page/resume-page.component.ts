import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  displayedColumns: string[] = ['name', 'totalAbseces', 'totalPresence', 'status'];
  dataSource!: student[];
  turmas: TurmaModel[] = [];
  selectedTurma!: string;

  ngOnInit(): void {
    this.getTurmas()
  }

  getTurmas() {
    this.turmas = TURMAS;
  }
  
  getStudents(){
    this.dataSource = STUDENT_DATA
    alert(this.selectedTurma)
  }

}

interface student {
  name: string;
  totalAbseces: number;
  totalPresence: number;
  status: string;
}

interface TurmaModel {
  name: string,
  id: string,
  hour: string
}

const STUDENT_DATA: student[] = [
  {name: 'Nicole Mattes', totalAbseces: 0, totalPresence: 100, status: 'Aprovada'},
  {name: 'Lucas Canno', totalAbseces: 100, totalPresence: 0, status: 'Reprovado'},
];

const TURMAS = [
  {
    name: '5º A Manhã',
    id: 'a',
    hour: '1º Aula'
  },{
    name: '5º A Manhã',
    id: 'b',
    hour: '2º Aula'
  },{
    name: '5º A Tarde',
    id: 'c',
    hour: '1º Aula'
  },{
    name: '5º A Tarde',
    id: 'd',
    hour: '2º Aula'
  }
]
