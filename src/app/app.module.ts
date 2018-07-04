import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing.module';
import { CoursesModule } from './courses/courses.module';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    AppRoutingModule,
    CoursesModule,
    MatToolbarModule,
    HttpClientModule
  ],
  providers: [],
  exports: [ToolbarComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
