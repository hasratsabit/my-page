import { User } from './../user';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {


/****************************** 
        Variables
*******************************/
  public form: FormGroup;
  public alertClass: String;
  public alertMessage: String;
  public processing: Boolean = false;
  public subscription: Subscription;

  constructor(
    private formBuilder: FormBuilder,
    private _userService: UserService
  ) {
    this.createRegisterForm();
   }


/****************************** 
      Creating Register Form
*******************************/
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



  /****************************** 
      Custome Validations
  *******************************/
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


/****************************** 
      Form Activations
*******************************/
  disableForm() {
    this.form.controls['name'].disable();
    this.form.controls['email'].disable();
    this.form.controls['username'].disable();
    this.form.controls['password'].disable();
  }
  enableForm() {
    this.form.controls['name'].enable();
    this.form.controls['email'].enable();
    this.form.controls['username'].enable();
    this.form.controls['password'].enable();
  }


/****************************** 
    Registering User
*******************************/
  onRegisterUser(){

    this.processing = true;
    this.disableForm();

    const user = <User> {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      username: this.form.get('username').value,
      password: this.form.get('password').value
    }

    this.subscription = this._userService.registerUser(user).subscribe(response => {
      this.alertClass = 'alert alert--success';
      this.alertMessage = response.message;
    }, (err) => {
      console.log(err);
    })
    setTimeout(() => {
      this.alertClass = null;
      this.alertMessage = null;
      this.enableForm();
      this.form.reset();
      this.processing = false;
    }, 2000);
  }


  ngOnInit() {

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
