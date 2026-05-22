import { test, expect } from '@playwright/test';
//creating the login test but useing Page Object
//importing page object, e.g.: we have a certain part of the test in a separate file 
//so we can refer to it insted of always copying that code
import { RegisterPage } from '../pages/RegistrationLogoutPage';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login test', () => {
  const name = 'Test User';
  const email = 'testuser@email.com';
  const password = 'Password123';

  test.beforeEach(async ({page}) => {
  const registerPage = new RegisterPage(page);

    // register first
    await registerPage.goto();
    await registerPage.register(name, email, password);
  });

//LP1-14 Log In - Verify Login with valid credentials is not allowed
  test('LP1-14 Log In - Verify Login with valid credentials is not allowed', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(email, password);

    // assertion here
   await expect(page.getByTestId('btn-user-menu')).toBeVisible();
});
});