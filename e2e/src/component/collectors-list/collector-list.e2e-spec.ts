import { AppPage } from './collector-list.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display collector list', () => {
    page.navigateTo();
    element(by.id('Artistas')).click().then(function () {
      expect(element(by.id('musician-name-0')).getAttribute("innerText")).toBe("Rubén Blades Bellido de Luna");
      expect(element(by.id('band-name-0')).getAttribute("innerText")).toBe("Queen");

    });
  });
  it('should see detail of band and musician', () => {
    page.navigateTo();
    element(by.id('Artistas')).click().then(function () {
      expect(element(by.id('musician-name-0')).click().then(function () {
       expect(element(by.id('musician-birth-date')).getAttribute("innerText")).toBe("Birth date: 1948-07-15");
      }));
      browser.navigate().back();
      expect(element(by.id('band-name-0')).click().then(function () {
      expect(element(by.id('band-creation-date')).getAttribute("innerText")).toBe("Creation date: 1969-12-31");
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
