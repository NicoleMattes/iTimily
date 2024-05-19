import { AddressModel } from "./address.model"
import { HorarioModel } from "./horario.model"
import { TurmaModel } from "./turma.model"

export interface CompleteUserModel {
    id: string,
    nomeCompleto: string,
    idade: number,
    materia: string,
    telefone: string,
    email: string,
    cpf: string,
    login: string,
    senha: string,
    endereco: AddressModel,
    turmas: TurmaModel[],
    professorResponsavel: boolean,
    horarios: HorarioModel[]
}