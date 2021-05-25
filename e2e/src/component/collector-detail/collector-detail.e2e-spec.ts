import { AppPage } from './collector-detail.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should show collector comments', () => {
    page.navigateTo();
    element(by.id('Collectors')).click().then(function () {
      expect(element(by.id('title 0')).click().then(function () {
      expect(element(by.id('comment_0')).getAttribute("innerText")).toBe("Buscando América");
      expect(element(by.id('description_0')).getAttribute("innerText")).toContain("The most relevant");
      expect(element(by.id('rating_0')).getAttribute("innerText")).toBe("5");

    }));
    });
  });

  it('should show collector favorite performers', () => {
    page.navigateTo();
    element(by.id('Collectors')).click().then(function () {
      expect(element(by.id('title 0')).click().then(function () {
      expect(element(by.id('performer_name_0')).getAttribute("innerText")).toContain("Rubén Blades");

    }));
    });
  });

  it('should show collector albums', () => {
    page.navigateTo();
    element(by.id('Collectors')).click().then(function () {
      expect(element(by.id('title 0')).click().then(function () {
      expect(element(by.id('album_name_0')).getAttribute("innerText")).toBe("Buscando América");
      expect(element(by.id('album_price_0')).getAttribute("innerText")).toBe("35");
      expect(element(by.id('album_status_0')).getAttribute("innerText")).toBe("Active");

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
