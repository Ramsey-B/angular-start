import { Injectable } from '@angular/core';
import { User } from '../Models/User'
import { DataService } from './data.service'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: any;

  constructor() { }

  ngOnInit() {
  }

  getUser(){
    return this.user
  }
}
