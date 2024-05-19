import { RegistroDePresencaModel } from "./registro-presenca.model";

export interface ChamadaPostModel {
  professorNome: string,
  professorId: string,
  professorMateria: string,
  data: string,
  periodo: string,
  turmaId: string,
  registroPresencas: RegistroDePresencaModel[]
}
