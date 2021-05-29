import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText() as Promise<string>;
  }
  searchTextById(id): Promise<string> {
    return element(by.id(id)).getText() as Promise<string>;
  }
  clickButtonByID(buttonID): Promise<void> {
    return element(by.id(buttonID)).click() as Promise<void>;
  }
  setInputText(id, text): Promise<void> {
    return element(by.id(id)).sendKeys(text) as Promise<void>;
  }
  clickButtonByClassName(className): Promise<void> {
    return element.all(by.className(className)).first().click() as Promise<void>;
 }
 wait(time): Promise<void> {
  return browser.sleep(time) as Promise<void>;
}
}
