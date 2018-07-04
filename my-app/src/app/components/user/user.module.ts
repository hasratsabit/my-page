import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,

    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterComponent]
})
export class UserModule { }
