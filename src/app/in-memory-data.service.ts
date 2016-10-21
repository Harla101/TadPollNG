import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
  let allPolls = [
    { id: 0,
      presentation: 'Tech Talk',
      event: 'codesmith night',
      type: 'MC',
      question: `How do you handle asynchronous events in your application, production or otherwise?`,
      prompts: {a: 'cheese', b: 'radish', c: 'beans', d: 'candy'},
      results: {a: 200, b: 203, c: 45, d: 97},
      createdDate: 1468046219000,
      eventDate: 1477255207000,
      live: true
    },
    { id: 1,
      presentation: 'Tech Talk',
      event: 'codesmith night',
      type: 'MC',
      question: `what's for breakfast?`,
      prompts: {a: 'cheese', b: 'radish', c: 'beans', d: 'candy'},
      results: {a: 200, b: 203, c: 45, d: 97},
      createdDate: 1468046219000,
      eventDate: 1477255207000,
      live: true

    },
    { id: 2,
      presentation: 'Tech Talk',
      event: 'codesmith night',
      type: 'MC',
      question: `what's for lunch?`,
      prompts: {a: 'cheese', b: 'radish', c: 'beans'},
      results: {a: 200, b: 203, c: 45},
      createdDate: 1468046219000,
      eventDate: 1477255207000,
      live: true
    },
    { id: 3,
      presentation: 'Tech Talk',
      event: 'codesmith night',
      type: 'MC',
      question: `what's for the party?`,
      prompts: {a: 'cheese', b: 'radish', c: 'beans'},
      results: {a: 200, b: 203, c: 45},
      createdDate: 1468046219000,
      eventDate: 1477255207000,
      live: true
    },
    { id: 4,
      presentation: 'Tech Talk',
      event: 'codesmith night2',
      type: 'MC',
      question: `what's for the zoo?`,
      prompts: {a: 'cheese', b: 'radish', c: 'beans'},
      results: {a: 200, b: 203, c: 45},
      createdDate: 1468046219000,
      eventDate: 1477255207000,
      live: false
    },
    { id: 5,
      presentation: 'Tech Talk2',
      event: 'codesmith night',
      type: 'MC',
      question: `what's for the camping trip?`,
      prompts: {a: 'cheese', b: 'radish', c: 'beans'},
      results: {a: 200, b: 203, c: 45},
      createdDate: 1468046219000,
      eventDate: 1477255207000,
      live: false
    },
    { id: 5,
      presentation: 'Tech Talk4',
      event: 'codesmith night',
      type: 'MC',
      question: `what's for the camping trip?`,
      prompts: {a: 'cheese', b: 'radish', c: 'beans'},
      results: {a: 200, b: 203, c: 45},
      createdDate: 1468046219000,
      eventDate: 1477255207000,
      live: false
    },
    { id: 5,
      presentation: 'Tech Talk5',
      event: 'codesmith night',
      type: 'MC',
      question: `what's for the camping trip?`,
      prompts: {a: 'cheese', b: 'radish', c: 'beans'},
      results: {a: 200, b: 203, c: 45},
      createdDate: 1468046219000,
      eventDate: 1477255207000,
      live: false
    }
  ];
    return { allPolls };
  }
}
