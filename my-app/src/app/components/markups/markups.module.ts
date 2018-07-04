import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarkupsRoutingModule } from './markups-routing.module';
import { ComponentsComponent } from './components/components.component';

@NgModule({
  imports: [
    CommonModule,
    MarkupsRoutingModule
  ],
  declarations: [ComponentsComponent]
})
export class MarkupsModule { }
