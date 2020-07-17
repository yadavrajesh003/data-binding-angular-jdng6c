import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  _user: any;

  @Output() userChange = new EventEmitter();

  @Input()
  get user() {
    return this._user;
  }

  set user(value: any) {
    this.userChange.emit(value);
    this._user = value;
  }


  constructor() { }

  ngOnInit() {
  }

}