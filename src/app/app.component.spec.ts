/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ActivePollsComponent } from './active-polls/active-polls.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ClosedPollsComponent } from './closed-polls/closed-polls.component';
import { PollBadgeComponent } from './poll-badge/poll-badge.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AllPollsService } from './all-polls.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

describe('App: TadPollNG', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ActivePollsComponent,
        ClosedPollsComponent,
        NavbarComponent,
        PollBadgeComponent
      ],
      imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService)
      ],
      providers: [AllPollsService]
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(AppComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
