import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';

import { CoursesListComponent } from './courses-list/courses-list.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: [
    CoursesListComponent
  ],
  exports: [CoursesListComponent]
})
export class CoursesModule { }
