import { AppPage } from './band-detail.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should see detail of band with two first albums', () => {
    page.navigateTo();
    element(by.id('Artists')).click().then(function () {
      expect(element(by.id('band-name-0')).click().then(function () {
       expect(element(by.id('band-name')).getAttribute("innerText")).toBe("Queen");
       expect(element(by.id('band-creation-date')).getAttribute("innerText")).toBe("Creation date: 1969-12-31");
       expect(element(by.id('album-name-0')).getAttribute("innerText")).toBe("A Night at the Opera");
       expect(element(by.id('album-name-1')).getAttribute("innerText")).toBe("A Day at the Races");
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
