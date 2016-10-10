import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActivePollsComponent } from './active-polls/active-polls.component';

import { PollsActiveService } from './polls-active.service';
import { PollBadgeComponent } from './poll-badge/poll-badge.component';
import { MapToIterablePipe } from './map-to-iterable.pipe';
import { ClosedPollsComponent } from './closed-polls/closed-polls.component';

@NgModule({
  declarations: [
    AppComponent,
    ActivePollsComponent,
    PollBadgeComponent,
    MapToIterablePipe,
    ClosedPollsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PollsActiveService],
  bootstrap: [AppComponent]
})
export class AppModule { }
