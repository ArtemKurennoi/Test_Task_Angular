import {NgModule} from '@angular/core';
import {BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import { SummaryComponent } from './summary/summary.component';
import { CardComponent } from './summary/child-card/card.component';
import { HeadingComponent } from './summary/child-header/heading.component';
import { NavigatorComponent } from './navigator/navigator.component';

//маршруты
const routes:Routes=[
  {path: '', component:SummaryComponent},
  {path: 'navigator', component:NavigatorComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    CardComponent,
    HeadingComponent,
    NavigatorComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
