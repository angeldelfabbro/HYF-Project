import { test, expect } from '@playwright/test';
import { RegisterPage } from '../pages/RegistrationPage';

//LP1-28 Registration - Email Format - Validation
test.describe('LP1-28 Registration - Email Format - Validation', () => {
  const name = 'Test User';
  const email = `test${Date.now()}@email.com`;
  const password = '1234560';

  test('User can register successfully1', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await registerPage.register(name, email, password);

    // assertion
    await expect(page.getByTestId('btn-user-menu')).toBeVisible();
 });
 })


//LP1-12 Registration - Verify Name Field rejects special characters
test.describe('LP1-12 Registration - Verify Name Field rejects special characters', () => {
  const name = 'Test User123+';
  const email = `test${Date.now()}@email.com`;
  const password = '1234560';

  test('User can register successfully2', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await registerPage.register(name, email, password);

    // assertion
    await expect(page.getByTestId('btn-user-menu')).toBeHidden();
   });
 })


//LP1-27 Registration - Verify registration form rejects accidental spaces in "Password" field
test.describe('LP1-27 Registration - Verify registration form rejects accidental spaces in "Password" field', () => {
  const name = 'Test User123+';
  const email = `test${Date.now()}@email.com `;
  const password = '1234560';

  test('User can register successfully3', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await registerPage.register(name, email, password);

    // assertion
    //Error message
    await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
    //User button
    await expect(page.getByTestId('btn-user-menu')).toBeHidden();
   });
});


//LP1-13 Registration - Verify registration form rejects accidental spaces in "E-mail" field
test.describe('LP1-13 Registration - Verify registration form rejects accidental spaces in "E-mail" field', () => {
  const name = 'Test User123+';
  const email = `test${Date.now()}@email.com `;
  const password = '1234560 ';

  test('User can register successfully4', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    await registerPage.goto();
    await registerPage.register(name, email, password);

    // assertion
    //Error message
    await expect(page.getByText('Please enter a valid email address.')).toBeVisible();
    //User button
    await expect(page.getByTestId('btn-user-menu')).toBeHidden();
   });
})