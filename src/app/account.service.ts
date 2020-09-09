import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private messageSource = new Subject<any>();
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(currentMessage: any) {
    this.messageSource.next(currentMessage);
  }
}
