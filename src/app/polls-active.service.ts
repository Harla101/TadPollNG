import { Injectable } from '@angular/core';

@Injectable()
export class PollsActiveService {
  currentPolls = [
  { id: 0,
    presentation: 'Tech Talk',
    event: 'codesmith night',
    type: 'MC',
    question: `what's for dinner?`,
    prompts: {a: 'cheese', b: 'radish', c: 'beans', d: 'candy'},
    results: {a: 200, b: 203, c: 45, d: 97},
    createdDate: 1468046219000,
    eventDate: 1477255207000
  },
  { id: 1,
    presentation: 'Tech Talk',
    event: 'codesmith night',
    type: 'MC',
    question: `what's for breakfast?`,
    prompts: {a: 'cheese', b: 'radish', c: 'beans', d: 'candy'},
    results: {a: 200, b: 203, c: 45, d: 97},
    createdDate: 1468046219000,
    eventDate: 1477255207000
  },
  { id: 2,
    presentation: 'Tech Talk',
    event: 'codesmith night',
    type: 'MC',
    question: `what's for lunch?`,
    prompts: {a: 'cheese', b: 'radish', c: 'beans'},
    results: {a: 200, b: 203, c: 45},
    createdDate: 1468046219000,
    eventDate: 1477255207000
  },
  { id: 3,
    presentation: 'Tech Talk',
    event: 'codesmith night',
    type: 'MC',
    question: `what's for the party?`,
    prompts: {a: 'cheese', b: 'radish', c: 'beans'},
    results: {a: 200, b: 203, c: 45},
    createdDate: 1468046219000,
    eventDate: 1477255207000
  }
];


  constructor() { }

}
