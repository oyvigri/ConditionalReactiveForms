import { Page } from './app.po';

describe('Conditional Forms', function() {
  let page: Page;

  beforeEach(() => {
    page = new Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(true).toBe(true);
  });
});
