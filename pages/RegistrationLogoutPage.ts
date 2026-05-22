// This POM handles user registration followed by logout to support authentication test coverage
// during the application's early development stage.
//
// The current implementation does not use a persistent backend/database.
// User data exists only within the active browser session and is lost once the browser is closed.
//
// Additionally, the application automatically logs in users immediately after registration.
// Therefore, a logout step is required before executing login-related test scenarios.

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

    // Logging out after registration
    await this.page.getByTestId('btn-logout').click();

    // BUG workaround: page needs reload for logout to fully apply
await this.page.reload();

  }
}