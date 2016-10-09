import { Injectable } from '@angular/core';

@Injectable()
export class PollsActiveService {
  currentPolls = [
  { id: 0,
    type: 'MC',
    question: `what's for dinner`,
    prompts: {a: 'cheese', b: 'radish', c: 'beans', d: 'candy'},
    results: {a: 200, b: 203, c: 45, d: 97}
  },
  { id: 1,
    type: 'MC',
    question: `what's for breakfast`,
    prompts: {a: 'cheese', b: 'radish', c: 'beans', d: 'candy'},
    results: {a: 200, b: 203, c: 45, d: 97}
  },
  { id: 2,
    type: 'MC',
    question: `what's for lunch`,
    prompts: {a: 'cheese', b: 'radish', c: 'beans', d: 'candy'},
    results: {a: 200, b: 203, c: 45, d: 97}
  }
];


  constructor() { }

}
