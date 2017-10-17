import { FourtPage } from './app.po';

describe('fourt App', () => {
  let page: FourtPage;

  beforeEach(() => {
    page = new FourtPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
