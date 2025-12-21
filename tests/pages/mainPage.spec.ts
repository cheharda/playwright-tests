import { test, expect, Locator } from '@playwright/test';
import { asyncWrapProviders } from 'node:async_hooks';
import { MainPage } from '../models/MainPage';

let mainPage: MainPage;

test.describe('Тесты главной страницы', () => {
  test.beforeEach(async ({ page }) => {
    mainPage = new MainPage(page);
    await mainPage.openMainPage();
  });

  test('Проверка отображения элементов навигации хедера', async () => {
    await mainPage.checkElementsVisability();
  });

  test('Проверка названий элементов хедера', async () => {
    await mainPage.checkElementsText();
  });

  test('Проверка атрибута href', async () => {
    await mainPage.checkElementsHrefAttribute();
  });

  test('Проверка переключения lightmode', async () => {
    await test.step('Нажатие на иконку переключения лайт мода', async () => {
      await mainPage.clickSwitchLightModeIcon();
    });
    await test.step('Проверка смены значения атрибута', async () => {
      await mainPage.checkDatatheamAttributeValue();
    });
  });

  test(`Проверка стилей со светлой темой`, async () => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Скриншотная проверка с активной светлой темой', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });

  test(`Проверка стилей с темной темой`, async () => {
    await test.step('Установка темной темы', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Скриншотная проверка с активной темной темой', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
