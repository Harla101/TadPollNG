/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllPollsService } from './all-polls.service';
import { Headers, Http, Response } from '@angular/http';

describe('Service: AllPolls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllPollsService]
    });
  });

  xit('should ...', inject([AllPollsService], (service: AllPollsService) => {
    expect(service).toBeTruthy();
  }));
});
