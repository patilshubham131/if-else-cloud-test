import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { TopCardComponent } from './top-card/top-card.component';
import { ProductModalComponent } from './modal/product-modal/product-modal.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { DashboardChartComponent } from './pie-chart/Dashboard-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    TopCardComponent,
    DashboardChartComponent,
    ProductModalComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
