import { UserService } from './../user.service';
import { passwordValidator } from '../../validators/validators.component';
import { IUser } from '../../../types/IUser.interface';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  isLoggedIn: boolean;
  login: AbstractControl;
  password: AbstractControl;
  myForm: FormGroup;
  constructor(private userService: UserService, formBuilder: FormBuilder) {
    this.isLoggedIn = false;
    this.myForm = formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      password: ['', Validators.compose([Validators.required, passwordValidator])]
    });
    this.login = this.myForm.controls['login'];
    this.password = this.myForm.controls['password'];
  }
  ngOnInit() {
  }

  onSubmit(value: IUser) {
    if (this.myForm.valid) {
     this.isLoggedIn = this.userService.signInUser(value);
      // this.myForm.reset();
    }
  }



}
