import { AppPage } from './musician-detail.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should see detail of musician with two first albums', () => {
    page.navigateTo();
    element(by.id('Artists')).click().then(function () {
      expect(element(by.id('musician-name-0')).click().then(function () {
       expect(element(by.id('musician-birth-date')).getAttribute("innerText")).toBe("Birth date: 1948-07-15");
       expect(element(by.id('album-name-0')).getAttribute("innerText")).toBe("Buscando América");
       expect(element(by.id('album-name-1')).getAttribute("innerText")).toBe("Poeta del pueblo");
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
