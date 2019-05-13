import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommService {

  constructor() { }

  public sendMessage(message: any) :any {
    console.log ("test");
  }
}
