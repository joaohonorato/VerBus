import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnibusComponent } from './components/onibus/onibus.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {GMapModule} from 'primeng/gmap';
@NgModule({
  declarations: [
    AppComponent,
    OnibusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GMapModule,
    TableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
