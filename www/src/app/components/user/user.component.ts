import { Component, OnInit, Input } from '@angular/core';
import { User, CreateUser } from '../../Models/User';
import { DataService } from '../../services/data.service';
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
  currentUser: User = this.server.user;

  constructor(private server:DataService, private _userService:UserService) { }

  ngOnInit() {
  }

  createUser() {
    this.user = CreateUser.create(this.newUser)
    this.server.registerUser(this.user);
  }
}
