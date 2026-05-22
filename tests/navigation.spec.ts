import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
//navigating to products page with POM, check product card and image appears
test.describe('Navigation tests', () => {
//LP1-20 Homepage - “Furniture” button - Navigates the user to the Furniture section
  test('LP1-20 Homepage - “Furniture” button - Navigates the user to the Furniture section', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.navigateTo('Furniture');

      await expect(homePage.productCategory().first()).toHaveText('furniture');
    } );

//LP1-4 Homepage - Verify that clicking the “Lighting” button in the header navigates the user to the PLP for lighting fixtures.
    test('LP1-4 Homepage - Verify that clicking the “Lighting” button in the header navigates the user to the PLP for lighting fixtures', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.navigateTo('Lighting');

      await expect(homePage.productCategory().first()).toHaveText('lighting');
    } );

//LP1-21 Homepage - “Decor” button - Navigates the user to the Decor section
    test('LP1-21 Homepage - “Decor” button - Navigates the user to the Decor section', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.navigateTo('Decor');

      await expect(homePage.productCategory().first()).toHaveText('decor');
    } );

//LP1-19 Homepage - “Home” button - Navigates the user to the Home section
test('LP1-19 Homepage - “Home” button - Navigates the user to the Home section', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();

    const allCategories = await homePage.productCategory().allTextContents();

    expect(allCategories).toContain('furniture');
    expect(allCategories).toContain('lighting');
    expect(allCategories).toContain('decor');
  });

//LP1-5 Homepage - Verify that clicking "Sales" button in the menu redirects user to PLP of items on sale.
test('LP1-5 Homepage - Verify that clicking "Sales" button in the menu redirects user to PLP of items on sale', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();
  await homePage.navigateTo('Sale');

  const salePrices = homePage.salePrice();
  const originalPrices = homePage.originalPrice();

  // Verify discounted products exist
  await expect(salePrices.first()).toBeVisible();
  await expect(originalPrices.first()).toBeVisible();

  // Verify there is at least one discounted item
  expect(await salePrices.count()).toBeGreaterThan(0);
  expect(await originalPrices.count()).toBeGreaterThan(0);
});
    }
  );


















//test.describe('products-test', () => {
  //let homePage: HomePage;

  //test.beforeEach(async ({ page }) => {
    //homePage = new HomePage(page);
    //await homePage.goto();
    //await homePage.navigateTo('Furniture'); 
  //});

  //////// testing if product category is matching
  //test('productcategory', async () => {
    //await expect(homePage.productCategory().first()).toHaveText('Furniture');
 // });

//});




// testing if product cards are visible
  // test('productcards', async () => {
  //   await expect(homePage.productCards().first()).toBeVisible();
  // });

  // testing if product images are visible
  //test('productimages', async () => {
  //   await expect(homePage.productImages().first()).toBeVisible();
  // });