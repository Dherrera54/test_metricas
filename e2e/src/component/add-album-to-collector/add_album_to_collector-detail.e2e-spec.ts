import { AppPage } from './add_album_to_collector-detail.po';
import { browser, by, element, logging } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('should add album to collector', () => {
    page.navigateTo();
    element(by.id('Collectors')).click().then(function () {
      page.wait(300);
        page.clickButtonByID('title 0');
        page.wait(300);
        page.clickButtonByID('add-album');
        page.setInputText('name','A Night at the Opera');
        page.setInputText('status','Inactive');
        page.setInputText('price','65');
        page.wait(300);
        page.clickButtonByID('submit');
        page.wait(300);
        expect(page.searchTextById('toast-container')).toContain("Agregado exitosamente!");


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
