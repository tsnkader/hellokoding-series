import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeModule } from 'angular-tree-component';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';


import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    TreeModule.forRoot(),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  //entryComponents: [AppComponent]
})
export class AppModule { }
