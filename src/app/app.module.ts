import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }  from '@angular/router';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AllPollsService } from './all-polls.service';

import { AppComponent } from './app.component';
import { ActivePollsComponent } from './active-polls/active-polls.component';
import { PollBadgeComponent } from './poll-badge/poll-badge.component';
import { ClosedPollsComponent } from './closed-polls/closed-polls.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PollDetailViewComponent } from './poll-detail-view/poll-detail-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    ActivePollsComponent,
    PollBadgeComponent,
    ClosedPollsComponent,
    NavbarComponent,
    PollDetailViewComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot([
      { path: '', component: HomeComponent},
      { path: 'dashboard', component: DashboardComponent },
      { path: 'polldetail/:pollID', component: PollDetailViewComponent},
      { path: '**', redirectTo: [''] }
   ])
 ],
  providers: [AllPollsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
