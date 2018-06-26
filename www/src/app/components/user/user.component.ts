import { Component, OnInit } from '@angular/core';
import { User, CreateUser } from '../../Models/User';
import { DataService } from '../../services/data.service'
import { UserService } from '../../services/user.service';

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
  createdUser: any;

  constructor(private server:DataService, private userService:UserService) { }

  ngOnInit() {
  }

  createUser() {
    this.user = CreateUser.create(this.newUser);
    this.server.registerUser(this.user);
  }

  get currentUser() {
    console.log(this.userService.currentUser, "computed works")
    return this.userService.currentUser;
  }
}
