import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { OverviewComponent } from './overview/overview.component';
import { ServiceComponent } from './analytics/service/service.component';
import { ForecastComponent } from './analytics/forecast/forecast.component';
import { BookingComponent } from './analytics/booking/booking.component';
import { CapacityComponent } from './capacity/capacity.component';
import { RuleEditorComponent } from './rule-editor/rule-editor.component';
import { SearchRuleComponent } from './shared/search-rule/search-rule.component';
import { AddNewRuleComponent } from './shared/add-new-rule/add-new-rule.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    DashboardComponent,
    SidebarComponent,
    OverviewComponent,
    ServiceComponent,
    ForecastComponent,
    BookingComponent,
    CapacityComponent,
    RuleEditorComponent,
    SearchRuleComponent,
    AddNewRuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SidebarComponent]
})
export class AppModule { }
