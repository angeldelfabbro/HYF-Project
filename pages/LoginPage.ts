//Object page for loging in
    import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://daristr.github.io/luxehome-qa/#/');
    await this.page.getByTestId('btn-nav-signin').click();
    //await this.page.getByRole('button', { name: 'Sign In' }).click();
  }

  async login(username: string, password: string) {
    await this.page.getByLabel('Email Address').fill(username);
    await this.page.getByLabel('Password').fill(password);

    // Use pressSequentially with a 100ms human delay
    //await this.page.getByLabel('Email Address').pressSequentially(username, { delay: 100 });
    //await this.page.getByLabel('Password').pressSequentially(password, { delay: 100 });

     await this.page.getByTestId('btn-login-submit').click();
     }
    
  }


  //get errorMessage() {
  //return this.page.getByText(/error|incorrect|invalid/i);
