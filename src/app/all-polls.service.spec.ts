/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AllPollsService } from './all-polls.service';

describe('Service: AllPolls', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllPollsService]
    });
  });

  it('should ...', inject([AllPollsService], (service: AllPollsService) => {
    expect(service).toBeTruthy();
  }));
});
