import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

}

export const isLogged = sessionStorage.getItem('isLogged') === 'Y' ? true : false

export function getDayByDate(weekDay: string) {
  let day!: number;
  switch(weekDay) {
    case 'Segunda-feira':
      day = 0
      break;
    case 'terça-feira':
      day = 1
      break;
    case 'quarta-feira':
      day = 2
      break;
    case 'quinta-feira':
      day = 3
      break;
    case 'sexta-feira':
      day = 4
      break;
    case 'sábado':
      day = 5
      break;
    case 'domingo':
      day = 6
      break;
  }
  return day;
}

export function getDayByDateExtenso(weekDay: number) {
  let day!: string;
  switch(weekDay) {
    case 0:
      day = 'segunda-feira'
      break;
    case 1:
      day = 'terça-feira'
      break;
    case 2:
      day = 'quarta-feira'
      break;
    case 3:
      day = 'quinta-feira'
      break;
    case 4:
      day = 'sexta-feira'
      break;
    case 5:
      day = 'sábado'
      break;
    case 6:
      day = 'domingo'
      break;
  }
  return day;
}
