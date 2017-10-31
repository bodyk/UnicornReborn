import { UnicornClientPage } from './app.po';

describe('unicorn-client App', () => {
  let page: UnicornClientPage;

  beforeEach(() => {
    page = new UnicornClientPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
