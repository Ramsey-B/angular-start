import { Component, OnInit } from '@angular/core';
import { User, CreateUser } from '../../Models/User';
import { DataService } from '../../services/data.service'

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

  constructor(private server:DataService) { }

  ngOnInit() {
  }

  createUser() {
    this.user = CreateUser.create(this.newUser)
    console.log(this.user)
    this.server.registerUser(this.user).subscribe(createdUser => {
      console.log(createdUser);
    });
  }
}
