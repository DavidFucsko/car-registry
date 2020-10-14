import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserAuthenticationComponent } from './user-authentication.component';
import { UserAuthenticationRoutingModule } from './user-authentication-routing.module';



@NgModule({
  declarations: [UserAuthenticationComponent],
  imports: [
    CommonModule,
    UserAuthenticationRoutingModule
  ]
})
export class UserAuthenticationModule { }
