/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PollsActiveService } from './polls-active.service';

describe('Service: PollsActive', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PollsActiveService]
    });
  });

  it('should ...', inject([PollsActiveService], (service: PollsActiveService) => {
    expect(service).toBeTruthy();
  }));
});
