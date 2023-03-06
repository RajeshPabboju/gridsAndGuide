import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient } from '@angular/common/http';
import { AuditsService } from './Services/audits.service';
import { HttpClientModule } from '@angular/common/http';
import { ScrollingModule } from "@angular/cdk/scrolling";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ScrollingModule
  ],
  providers: [HttpClient,AuditsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
