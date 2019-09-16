import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CaptchaService {

  constructor() { }

    public send(message: any) :any {
    console.log (message);
  }
}
