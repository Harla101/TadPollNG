import { Component, OnInit } from '@angular/core';
import { AllPollsService } from '../all-polls.service';
import { Poll } from '../poll';

@Component({
  selector: 'app-closed-polls',
  templateUrl: './closed-polls.component.html',
  styleUrls: ['./closed-polls.component.css']
})
export class ClosedPollsComponent {
  polls: Poll[];

constructor(private pollService: AllPollsService){}

  ngOnInit(): void {
    this.getPolls();
  }

  getPolls(): void {
    this.pollService.getPolls()
                    .subscribe(
                      polls => this.polls = polls,
                      error => console.log(error));
  }
}
