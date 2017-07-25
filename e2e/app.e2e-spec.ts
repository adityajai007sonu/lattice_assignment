import { LatticePage } from './app.po';

describe('lattice App', () => {
  let page: LatticePage;

  beforeEach(() => {
    page = new LatticePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
