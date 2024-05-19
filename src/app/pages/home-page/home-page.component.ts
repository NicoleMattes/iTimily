import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentDate = new Date();
  formatedDate = `${this.currentDate.getDay()}/${this.currentDate.getMonth() + 1}/${this.currentDate.getFullYear()}`;
  turmas!: TurmaModel[];
  selectedTurma!: TurmaModel;
  alunos!: AlunoModel[];
  totalFaltas = 0;
  porcentagemFaltas = 0;

  ngOnInit(): void {
    this.getTurma();
    this.getAlunos();
  }

  getTurma() {
    this.turmas = TURMAS;
    this.selectedTurma = this.turmas[0];
    this.getAlunos();
  }

  selectTurma(turma: TurmaModel) {
    this.selectedTurma = turma;
    this.getAlunos();
  }

  getAlunos() {
    this.alunos = ALUNOS;
    this.getTotalFalta()
  }

  getTotalFalta() {
    this.totalFaltas = this.alunos.filter(aluno => aluno.presence === false).length;
    this.porcentagemFaltas = +((100*(this.alunos.length - this.totalFaltas))/this.alunos.length).toFixed(2);
  }

  changeAlunoPresence(aluno: AlunoModel) {
    aluno.presence = !aluno.presence;
    this.getTotalFalta()
  }

  finalizarChamada() {
    console.log(this.alunos);
  }
}

interface TurmaModel {
  name: string,
  id: string,
  hour: string
}

interface AlunoModel {
  name: string,
  presence: boolean
}

const ALUNOS = [
  {
    name: 'Nicole Mattes',
    presence: true
  },{
    name: 'Lucas Canno',
    presence: false
  },{
    name: 'Caue Mattes',
    presence: false
  },{
    name: 'Quarto Aluno',
    presence: false
  },{
    name: 'Fiquei Sem',
    presence: false
  },{
    name: 'Ideia Para',
    presence: false
  },{
    name: 'Nomes de Alunos',
    presence: false
  },
]

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
