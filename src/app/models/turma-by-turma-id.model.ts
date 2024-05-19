import { AlunoParaTurmaModel } from "./aluno-para-turma.model";

export interface TurmaByTurmaIdModel {
    turmaId: string,
    nome: string,
    alunos: AlunoParaTurmaModel[]        
}