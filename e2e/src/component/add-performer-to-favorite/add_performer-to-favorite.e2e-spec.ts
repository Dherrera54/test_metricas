import { AppPage } from './add_performer-to-favorite.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should add musician to favorite', () => {
    page.navigateTo();
    element(by.id('Artists')).click().then(function () {
        page.clickButtonByID('favorite-musician-0');
        page.wait(300);
        page.setInputText('name','Manolo Bellon');
        page.wait(300);
        page.clickButtonByID('submit');
        page.wait(3000);
        expect(page.searchTextById('toast-message')).toContain("Asociado Exitosamente!");


    })
  })


  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
