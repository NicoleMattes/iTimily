import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsServiceService {

}

export const isLogged = sessionStorage.getItem('isLogged') === 'Y' ? true : false
