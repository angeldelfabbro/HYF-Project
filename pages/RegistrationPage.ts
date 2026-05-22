import { Page } from '@playwright/test';

export class RegisterPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://daristr.github.io/luxehome-qa/#/');
    await this.page.getByTestId('btn-nav-register').click();
  }

  async register(name: string, email: string, password: string) {
    await this.page.getByLabel('Full Name').fill(name);
    await this.page.getByLabel('Email Address').fill(email);
    await this.page.getByTestId('input-register-password').fill(password);
    await this.page.getByTestId('input-register-confirm-password').fill(password);

    await this.page.getByTestId('btn-register-submit').click();
  }
}