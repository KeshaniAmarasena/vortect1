import { Component, OnInit } from '@angular/core';
import { User} from './user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit {

user:User ={

  username:"",
  password:""

}

  constructor() { }

  ngOnInit() {
  }

}
