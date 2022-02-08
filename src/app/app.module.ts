import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './components/BodyComponent/body-component.component';
import { HeaderComponent } from './components/HeaderComponent/header-component.component';
import { FormComponent } from './components/FormComponent/form-component.component';
import { MyGenericTableComponent } from './my-generic-table/my-generic-table.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FormComponent,
    MyGenericTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
