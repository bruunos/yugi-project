import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { UserFormComponent } from './modals/user-form/user-form.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing';


@NgModule({
  declarations: [
    UsersComponent,
    UserFormComponent,
    
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
