import { Component, OnInit, Input } from '@angular/core';

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

}
