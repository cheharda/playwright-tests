import { test, expect } from '../fixtures/mainPage';
import { MainPage } from '../models/MainPage';

test.describe('Тесты главной страницы', () => {
  test('Проверка отображения элементов навигации хедера', async ({ mainPage }) => {
    await mainPage.checkElementsVisability();
  });

  test('Проверка названий элементов хедера', async ({ mainPage }) => {
    await mainPage.checkElementsText();
  });

  test('Проверка атрибута href', async ({ mainPage }) => {
    await mainPage.checkElementsHrefAttribute();
  });

  test('Проверка переключения lightmode', async ({ mainPage }) => {
    await test.step('Нажатие на иконку переключения лайт мода', async () => {
      await mainPage.clickSwitchLightModeIcon();
    });
    await test.step('Проверка смены значения атрибута', async () => {
      await mainPage.checkDatatheamAttributeValue();
    });
  });

  test(`Проверка стилей со светлой темой`, async ({ mainPage }) => {
    await test.step('Установка светлой темы', async () => {
      await mainPage.setLightMode();
    });
    await test.step('Скриншотная проверка с активной светлой темой', async () => {
      await mainPage.checkLayoutWithLightMode();
    });
  });

  test(`Проверка стилей с темной темой`, async ({ mainPage }) => {
    await test.step('Установка темной темы', async () => {
      await mainPage.setDarkMode();
    });
    await test.step('Скриншотная проверка с активной темной темой', async () => {
      await mainPage.checkLayoutWithDarkMode();
    });
  });
});
