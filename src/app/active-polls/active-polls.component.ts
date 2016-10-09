import { Component, OnInit } from '@angular/core';
import { PollsActiveService } from '../polls-active.service';


@Component({
  selector: 'active-polls',
  templateUrl: './active-polls.component.html',
  styleUrls: ['./active-polls.component.css']
})
export class ActivePollsComponent {

constructor(private livePolls:PollsActiveService){}
}
