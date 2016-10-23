import { Component, OnInit, Input } from '@angular/core';
import { Poll } from '../poll';
import { Router } from '@angular/router';

@Component({
  selector: 'app-poll-badge',
  templateUrl: './poll-badge.component.html',
  styleUrls: ['./poll-badge.component.css']
})

export class PollBadgeComponent implements OnInit {
  @Input() poll;


  constructor(
    private router: Router
  ){}
  ngOnInit() {
  }

  gotoDetail(poll: Poll): void {
    let link = ['/polldetail', this.poll.id];
    console.log(this.poll.id)
    this.router.navigate(link);
  }
}
