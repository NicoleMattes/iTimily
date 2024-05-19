import { Component, OnInit } from '@angular/core';
import { AlunoParaTurmaModel } from 'src/app/models/aluno-para-turma.model';
import { AulasPorHorarioModel } from 'src/app/models/aulas-por-horario.model';
import { ChamadaPostModel } from 'src/app/models/chamada.model';
import { HorarioModel } from 'src/app/models/horario.model';
import { RegistroDePresencaModel } from 'src/app/models/registro-presenca.model';
import { TurmaByTurmaIdModel } from 'src/app/models/turma-by-turma-id.model';
import { TurmaModel } from 'src/app/models/turma.model';
import { ChamadaService } from 'src/app/services/chamada.service';
import { StorageService } from 'src/app/services/storage.service';
import { TurmaService } from 'src/app/services/turma.service';
import { getDayByDateExtenso } from 'src/app/services/utils.service.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  currentDate = new Date();
  formatedDate = `${this.currentDate.getDate()}/${this.currentDate.getMonth() + 1}/${this.currentDate.getFullYear()}`;
  totalFaltas = 0;
  porcentagemFaltas = 0;
  turmas: TurmaModel[] = [];
  selectedTurma!: TurmaModel;
  selectedPeriod!: string;
  alunos: AlunoParaTurmaModel[] = [];
  alunosFaltas: AlunoParaTurmaModel[] = [];
  alunosPresenca: AlunoParaTurmaModel[] = [];
  percPresenca = 0;

  constructor(private storageService: StorageService, private turmaService: TurmaService, private chamadaService: ChamadaService) {}

  ngOnInit(): void {
    this.getTurmas()
  }

  getTurmas() {
    this.turmas=this.storageService.COMPLETE_USER.turmas;
    this.selectedTurma=this.turmas[0];
  }

  selectTurma(turma: TurmaModel) {
    this.selectedTurma = turma;
  }

  getAlunos() {
    if(this.selectedTurma.turmaId ===  undefined || this.selectedTurma.turmaId === null || this.selectedTurma.turmaId === '') {
      alert('Turma ainda não cadastrada')
    } else {
      if(this.selectedPeriod !== '1º aula' && this.selectedPeriod !== '2º aula') {
        alert('Por favor selecione um período')
      } else {
        this.turmaService.getTurmaByTurmaId(this.selectedTurma.turmaId).subscribe({
          next: data => {
            data.alunos.forEach(aluno => {
              this.alunos.push(aluno);
            });
            this.getFaltasEPresencas();
          },
          error: e => console.error(e)
        })
      }
    }
  }

  changeAlunoPresence(aluno: AlunoParaTurmaModel) {
    aluno.presenca = !aluno.presenca;
    this.getFaltasEPresencas();
  }

  getFaltasEPresencas() {
    this.alunosFaltas = this.alunos.filter(aluno => aluno.presenca === false);
    this.alunosPresenca = this.alunos.filter(aluno => aluno.presenca === true);
    this.percPresenca = +(((this.alunos.length - this.alunosFaltas.length)*100)/this.alunos.length)
  }

  finalizarChamada() {
    let body = {
      data: this.formatedDate,
      periodo: this.selectedPeriod,
      professorId: this.storageService.COMPLETE_USER.id,
      professorMateria: this.storageService.COMPLETE_USER.materia,
      professorNome: this.storageService.COMPLETE_USER.nomeCompleto,
      turmaId: this.selectedTurma.turmaId,
      registroPresencas: this.getRegistroDePresenca()
    }
    this.chamadaService.postChamada(body).subscribe({
      next: data => console.log(data),
      error: e => console.error(e)
    })
  }

  getRegistroDePresenca() {
    const registro: RegistroDePresencaModel[] = [];
    this.alunos.forEach(aluno => {
      let presencaAluno = {
        alunoId: aluno.alunoId,
        presente: aluno.presenca
      }
      registro.push(presencaAluno);
    })
    return registro;
  }

}