import { Component, OnInit } from '@angular/core';
import { User, CreateUser } from '../../interfaces/IUser';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  newUser = {
    email: "",
    username: "",
    password: ""
  }
  user: User;

  constructor() { }

  ngOnInit() {
  }

  createUser() {
    debugger
    this.user = CreateUser.create(this.newUser)
    console.log(this.user)
  }
}
