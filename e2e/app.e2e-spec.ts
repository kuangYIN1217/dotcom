import { TextAnalysisPage } from './app.po';

describe('text-analysis App', () => {
  let page: TextAnalysisPage;

  beforeEach(() => {
    page = new TextAnalysisPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
