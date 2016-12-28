import { EcamoPage } from './app.po';

describe('ecamo App', function() {
  let page: EcamoPage;

  beforeEach(() => {
    page = new EcamoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
