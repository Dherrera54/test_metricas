import { browser, by, element } from 'protractor';

export class DetailAlbumComponentPo {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  searchTextById(id): Promise<string> {
    return element(by.id(id)).getText() as Promise<string>;
  }

  clickButtonByClassName(className): Promise<void> {
     return element.all(by.className(className)).first().click() as Promise<void>;
  }

  clickButtonById(className): Promise<void> {
    return element.all(by.id(className)).first().click() as Promise<void>;
  }

  wait(time): Promise<void> {
    return browser.sleep(time) as Promise<void>;
  }

  get(): Promise<string> {
    return element(by.id('Home')).getText() as Promise<string>;
  }
}
