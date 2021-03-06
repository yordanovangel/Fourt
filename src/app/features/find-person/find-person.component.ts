import {Component, OnInit} from '@angular/core';
import {UserService} from '../../_services/user.service';

@Component({
  selector: 'app-find-person',
  templateUrl: './find-person.component.html',
  styleUrls: ['./find-person.component.css']
})
export class FindPersonComponent implements OnInit {
  userName = '';
  users = [];
  showInfo = false;
  currentUser = {};


  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
      .subscribe(users => {
        this.users = users.json();
      });
  }

  showUserInfo(userSelected) {
    console.log(userSelected);
    this.currentUser = userSelected;
    this.showInfo = true;
  }

  close() {
    this.showInfo = false;
  }
}
