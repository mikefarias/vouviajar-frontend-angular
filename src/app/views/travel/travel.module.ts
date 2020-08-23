import { TravelRoutingModule } from './travel-routing.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TravelComponent } from './travel.component';

@NgModule({
  imports: [
    TravelRoutingModule,
    CommonModule,
    FormsModule
  ],
  declarations: [
    TravelComponent,
  ]
})
export class TravelModule { }
