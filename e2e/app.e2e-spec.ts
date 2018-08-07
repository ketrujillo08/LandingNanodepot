import { LandNanoPage } from './app.po';

describe('land-nano App', function() {
  let page: LandNanoPage;

  beforeEach(() => {
    page = new LandNanoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
