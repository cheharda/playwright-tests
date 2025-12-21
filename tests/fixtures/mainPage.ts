import { test as base } from '@playwright/test';
import { MainPage } from '../models/MainPage';

// Declare the types of your fixtures.
type MyFixtures = {
  mainPage: MainPage;
};

export const test = base.extend<MyFixtures>({
  mainPage: async ({ page }, use) => {
    // Set up the fixture.
    const mainPage = new MainPage(page);
    await mainPage.openMainPage();

    // Use the fixture value in the test.
    await use(mainPage);
  },
});
export { expect } from '@playwright/test';
