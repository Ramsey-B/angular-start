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
  currentUser: User

  constructor(private server:DataService, private _userService:UserService) { }

  ngOnInit() {
    this._userService.cast.subscribe(user => {
      debugger
      this.currentUser = user;
      console.log(user)
    })
  }

  createUser() {
    this.user = CreateUser.create(this.newUser)
    this.server.registerUser(this.user);
  }
}
