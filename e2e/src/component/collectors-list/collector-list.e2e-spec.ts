import { AppPage } from './collector-list.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display collector list', () => {
    page.navigateTo();
    element(by.id('Collectors')).click().then(function () {
      expect(element(by.id('title 0')).getAttribute("innerText")).toBe("Manolo Bellon");
      expect(element(by.id('title 1')).getAttribute("innerText")).toBe("Jaime Monsalve");

    });
  });
  it('should open detail of a collector', () => {
    page.navigateTo();
    element(by.id('Collectors')).click().then(function () {
      expect(element(by.id('title 0')).click().then(function () {
       expect(element(by.id('comment-title')).getAttribute("innerText")).toBe("Comments made by Manolo Bellon");
      }));
      browser.navigate().back();
      expect(element(by.id('title 1')).click().then(function () {
      expect(element(by.id('comment-title')).getAttribute("innerText")).toBe("Comments made by Jaime Monsalve");
    }));

    });
});
  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
