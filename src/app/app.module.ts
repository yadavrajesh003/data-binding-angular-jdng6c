import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, EditUserComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
