import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {AuthService} from '../auth.service';
import {User} from '../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  logingform!: FormGroup;
  userLogged!: User | null;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit(): void {
    this.logingform = this.fb.group({
      'username': [''],
      'password': [''],
    })

    this.authService.currentUser.subscribe( user => {
      this.userLogged = user
    })

  }

  login():void {
    const userForm: {[key: string]: string} = this.logingform.value
    this.authService.login(userForm.username, userForm.password).subscribe();
  }

  logout() {
    this.authService.logout()
  }
}
