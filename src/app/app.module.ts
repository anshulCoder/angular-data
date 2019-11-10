import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from "@angular/forms";
import { HomeComponent } from './home/home.component';
import { SharingService } from './services/sharing.service';
import { ApiConnectorService } from './services/api-connector.service';
import { HttpService } from './services/http.service';
import { HttpClientModule } from "@angular/common/http";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddMasterComponent } from './add-master-data/add-master.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    AddMasterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
  	SharingService,
    ApiConnectorService,
    HttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
