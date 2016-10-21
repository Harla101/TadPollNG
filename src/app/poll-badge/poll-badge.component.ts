import { Component, OnInit, Input } from '@angular/core';


let selectedPoll;

@Component({
  selector: 'app-poll-badge',
  templateUrl: './poll-badge.component.html',
  styleUrls: ['./poll-badge.component.css']
})

export class PollBadgeComponent implements OnInit {
  @Input() poll;



  constructor(){ }
  ngOnInit() {
  }

  pollDetailClick(e){
    selectedPoll = this.poll
    console.log(selectedPoll)
  }
}
