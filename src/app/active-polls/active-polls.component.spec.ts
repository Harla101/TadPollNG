/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ActivePollsComponent } from './active-polls.component';
import { AllPollsService } from '../all-polls.service';
import { Poll } from '../poll';

describe('Component: ActivePolls', () => {
  it('should create an instance', () => {
    let component = new ActivePollsComponent();
    expect(component).toBeTruthy();
  });
  it('sanity check', () => {
      const sorted = 5;
      expect(sorted).toEqual(5);
  });
});
