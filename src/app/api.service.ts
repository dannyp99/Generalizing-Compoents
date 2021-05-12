import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export interface User {
  id: string,
  name: string,

}
export class ApiService {

  constructor() { }

}
