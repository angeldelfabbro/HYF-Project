import { expect, Page } from '@playwright/test';

export class HomePage {
  constructor(private page: Page) {}

  // Open homepage
  async goto() {
    await this.page.goto('https://daristr.github.io/luxehome-qa/#/');
  }

  // Navigate to ANY category (Home, Furniture, Lighting, Decor, Sale)
  async navigateTo(category: string) {
    const categoryButton = this.page.getByTestId(`nav-${category.toLowerCase()}`
  );

    await expect(categoryButton).toBeVisible();
    await categoryButton.click();

    // Wait for products to load
    await this.productCards().first().waitFor();
  }

  // Locator for product cards (list of products)
  productCards() {
    return this.page.locator('.product-card');
  }

  // Locator for product images
  productImages() {
    return this.page.locator('.product-card-img');
  }

   // Locator for product category
  productCategory() {
    return this.page.locator('.product-card-category');
  }

  //Locator for price tag
  salePrice() {
  return this.page.locator('.price-current');
}

  // Locator for original price
  originalPrice() {
  return this.page.locator('.price-original');
}
}
