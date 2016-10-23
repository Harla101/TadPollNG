import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { AllPollsService } from '../all-polls.service';

import { Poll } from '../poll';

@Component({
  selector: 'app-poll-detail-view',
  templateUrl: './poll-detail-view.component.html',
  styleUrls: ['./poll-detail-view.component.css']
})
export class PollDetailViewComponent implements OnInit {
  poll: Poll;
  constructor(
    private pollService: AllPollsService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['pollID'];
      console.log(id);
      this.pollService.getPoll(id)
        .subscribe(poll => this.poll = poll, e => console.log(e))
    });
  }

  goBack(): void {
  this.location.back();
}

}
