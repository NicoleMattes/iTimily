import { Injectable } from '@angular/core';
import { CompleteUserModel } from '../models/complete-user.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  COMPLETE_USER!: CompleteUserModel;
}
