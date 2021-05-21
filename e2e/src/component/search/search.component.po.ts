import { browser, by, element } from 'protractor';

export class SearchComponentPo {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  searchTextById(id): Promise<string> {
    return element(by.id(id)).getText() as Promise<string>;
  }

  searchTextByXPath(id): Promise<string> {
    return element(by.xpath(id)).getText() as Promise<string>;
  }

  clickButtonByClassName(className): Promise<void> {
     return element.all(by.className(className)).first().click() as Promise<void>;
  }

  clickButtonByID(className): Promise<void> {
    return element(by.id(className)).click() as Promise<void>;
  }

  sendTextByClass(className, text): Promise<void> {
    return element(by.id(className)).sendKeys(text) as Promise<void>;
  }

  clearTextByClass(className): Promise<void> {
    return element(by.className(className)).clear()  as Promise<void>;
  }

  clickWithMoveElement(id): Promise<void> {
    return browser.actions().mouseMove(element(by.id(id))).click().perform() as Promise<void>;
  }

  sendText(id, text): Promise<void> {
    return element(by.id(id)).sendKeys(text) as Promise<void>;
  }

  clearText(id): Promise<void> {
    return element(by.id(id)).clear()  as Promise<void>;
  }

  clickComBox(selector, text): Promise<void> {
    return element(by.cssContainingText(selector, text)).click()  as Promise<void>;
  }

  wait(time): Promise<void> {
    return browser.sleep(time) as Promise<void>;
  }

  get(): Promise<string> {
    return element(by.id('Home')).getText() as Promise<string>;
  }
}
