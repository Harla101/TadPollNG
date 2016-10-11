import { Component, OnInit } from '@angular/core';
import { AllPollsService } from '../all-polls.service';
import { Poll } from '../poll';

@Component({
  selector: 'active-polls',
  templateUrl: './active-polls.component.html',
  styleUrls: ['./active-polls.component.css']
})
export class ActivePollsComponent implements OnInit {
  polls: Poll[];

constructor(private pollService: AllPollsService){}

  ngOnInit(): void {
    this.getPolls();
  }

  getPolls(): void {
    this.pollService.getPolls()
                    .subscribe(
                      polls => console.log(polls),
                      error => console.log(error));
  }

}
