
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public form: FormGroup;

  constructor(
    public formBuilder: FormBuilder
  ) {
    this.createRegisterForm();
   }

  createRegisterForm() {
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(20),
        this.validateName
      ])],
      email: ['', Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(30),
        this.validateEmail
      ])],
      username: ['', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(15),
        this.validateUsername
      ])],
      password: ['', Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
        this.validatePassword
      ])],
      confirm: ['', Validators.required]
    }, { validator: this.matchPasswords('password', 'confirm')})
  }

   validateName(control) {
    const regExp = new RegExp(/^[a-zA-Z ]+$/);
    if(regExp.test(control.value)) return null;
    return {'validateName': true };
  }

  validateEmail(control) {
    const regExp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    if(regExp.test(control.value)) return null;
    return {'validateEmail': true};
  }

  validateUsername(control) {
    const regExp = new RegExp(/^[a-zA-Z0-9]+$/);
    if(regExp.test(control.value)) return null;
    return {'validateUsername': true }
  }

  validatePassword(control) {
    const regExp = new RegExp(/^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/);
    if(regExp.test(control.value)) return null;
    return {'validatePassword': true };
  }

  matchPasswords(password, confirm) {
    return (group: FormGroup) => {
      if(group.controls[password].value === group.controls[confirm].value) return null;
      return {'matchPasswords': true };
    }
  }


  onRegisterUser(){

  }


  ngOnInit() {
  }

}
