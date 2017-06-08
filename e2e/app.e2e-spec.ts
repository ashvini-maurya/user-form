import { UserFormPage } from './app.po';

describe('user-form App', () => {
  let page: UserFormPage;

  beforeEach(() => {
    page = new UserFormPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
