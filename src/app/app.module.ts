import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ActivePollsComponent } from './active-polls/active-polls.component';

import { PollsActiveService } from './polls-active.service';

@NgModule({
  declarations: [
    AppComponent,
    ActivePollsComponent
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
