import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsComponent } from './cards.component';

import { CardFormComponent } from './modal/card-form/card-form.component';

import { CardsRoutingModule } from './cards.routing';

@NgModule({
  declarations: [
    CardsComponent,
    CardFormComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    ReactiveFormsModule
  ]
})
export class CardsModule { }