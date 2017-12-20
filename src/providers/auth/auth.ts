import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class AuthProvider {

  constructor() {
    console.log('Hello AuthProvider Provider');
  }

  check() {
    return new Promise((resolve =>  {
      setTimeout(() => {
        resolve(true);
      }, 3000);
    }));

  }

}
