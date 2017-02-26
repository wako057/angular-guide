import { AngularGuidePage } from './app.po';

describe('angular-guide App', () => {
  let page: AngularGuidePage;

  beforeEach(() => {
    page = new AngularGuidePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
