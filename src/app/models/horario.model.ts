import { AulasPorHorarioModel } from "./aulas-por-horario.model"

export interface HorarioModel {
    dia: string,
    aulasManha: AulasPorHorarioModel[],
    aulasTarde: AulasPorHorarioModel[]
}