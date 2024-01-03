import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogicServiceService {

  constructor() { }

  validateForm(email: string, password: string) {
    alert(`Login: <br/> email: ${email} <br/> password: ${password}`)
  }
}
