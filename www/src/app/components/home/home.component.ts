import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { UserService } from '../../services/user.service';
import { User } from '../../Models/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentUser: User;

  constructor(public _dataService:DataService, private _userService:UserService, private _router:Router) { }

  ngOnInit() {
    if(this.currentUser == null) {
      this._dataService.authenticate();
    }
    this._userService.cast.subscribe(user => {
      this.currentUser = user;
      if(this.currentUser == null){
        this._router.navigate(['login'])
      }
    })
  }
}
