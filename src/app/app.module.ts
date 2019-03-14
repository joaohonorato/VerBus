import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OnibusComponent } from './components/onibus/onibus.component';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import {GMapModule} from 'primeng/gmap';
import {CalendarModule} from 'primeng/calendar';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SliderModule} from 'primeng/slider';


declare var google: any;
@NgModule({
  declarations: [
    AppComponent,
    OnibusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    GMapModule,
    TableModule,
    CalendarModule,
    FormsModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
