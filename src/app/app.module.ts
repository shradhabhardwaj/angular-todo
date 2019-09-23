import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDo3HeaderComponent } from './ToDo3/to-do3-header/to-do3-header.component';
import { ToDo3InputComponent } from './ToDo3/to-do3-input/to-do3-input.component';
import { ToDo3ListComponent } from './ToDo3/to-do3-list/to-do3-list.component';
import { ToDo3FooterComponent } from './ToDo3/to-do3-footer/to-do3-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDo3HeaderComponent,
    ToDo3InputComponent,
    ToDo3ListComponent,
    ToDo3FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
