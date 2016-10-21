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



@NgModule({
  declarations: [
    AppComponent,
    ActivePollsComponent,
    PollBadgeComponent,
    ClosedPollsComponent,
    NavbarComponent,
    PollDetailViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  providers: [AllPollsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
