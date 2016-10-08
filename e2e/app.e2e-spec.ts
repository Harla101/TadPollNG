import { TadPollNGPage } from './app.po';

describe('tad-poll-ng App', function() {
  let page: TadPollNGPage;

  beforeEach(() => {
    page = new TadPollNGPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
