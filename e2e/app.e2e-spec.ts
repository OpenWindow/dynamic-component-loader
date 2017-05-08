import { NgDynamicCompSamplePage } from './app.po';

describe('ng-dynamic-comp-sample App', () => {
  let page: NgDynamicCompSamplePage;

  beforeEach(() => {
    page = new NgDynamicCompSamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
