import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Card } from './componnents/card/card';
import { EditButton } from './componnents/edit-button/edit-button';
import { DeleteButton } from './componnents/delete-button/delete-button';
import { Header } from './componnents/header/header';
import { FormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { FormSubmit } from './componnents/form-submit/form-submit';
import { Table } from './componnents/table/table';

@NgModule({
  declarations: [
    App,
    Card,
    EditButton,
    DeleteButton,
    Header,
    FormSubmit,
    Table
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    JsonPipe
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
  ],
  bootstrap: [App]
})
export class AppModule { }
