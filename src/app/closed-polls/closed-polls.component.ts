import { Component, OnInit } from '@angular/core';
import { PollsActiveService } from '../polls-active.service';

@Component({
  selector: 'app-closed-polls',
  templateUrl: './closed-polls.component.html',
  styleUrls: ['./closed-polls.component.css']
})
export class ClosedPollsComponent {

  constructor(private livePolls:PollsActiveService){}
}
