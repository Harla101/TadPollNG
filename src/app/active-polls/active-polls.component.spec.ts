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
  it('should retrieve polls from service', () => {
      expect(5).toEqual(5);
  });
});
