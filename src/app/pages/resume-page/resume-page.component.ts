import { Component, OnInit } from '@angular/core';
import { AlunoRelatorio } from 'src/app/models/aluno-relatorio.model';
import { TurmaModel } from 'src/app/models/turma.model';
import { StorageService } from 'src/app/services/storage.service';
import { TurmaService } from 'src/app/services/turma.service';

@Component({
  selector: 'app-resume-page',
  templateUrl: './resume-page.component.html',
  styleUrls: ['./resume-page.component.css']
})
export class ResumePageComponent implements OnInit {
  // displayedColumns: string[] = ['name', 'totalAbseces', 'totalPresence', 'status'];
  displayedColumns: string[] = ['name', 'totalAbseces', 'totalPresence'];
  dataSource!: AlunoRelatorio[];
  turmas: TurmaModel[] = [];
  selectedTurma!: string;
  alunos: AlunoRelatorio[] = [];

  constructor(private storageService: StorageService, private turmaService: TurmaService) {}

  ngOnInit(): void {
    this.getTurmas()
  }

  getTurmas() {
    this.storageService.COMPLETE_USER.turmas.forEach(turma => {
      this.turmas.push(turma);
    });
  }
  
  getStudents(){
    if(!this.selectedTurma || this.selectedTurma === null || this.selectedTurma === '') {
      alert('Turma ainda não cadastrada');
    } else {
      this.turmaService.getRelatorio(this.selectedTurma).subscribe({
        next: data => {
          data.forEach(aluno => {
            this.alunos.push(aluno);
          })
          this.dataSource = this.alunos;
        },
        error: e => console.error(e)
      })
    }
  }

}

interface student {
  name: string;
  totalAbseces: number;
  totalPresence: number;
  status: string;
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
