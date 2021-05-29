import { AppPage } from './prize-create-band.po';
import { browser, by, element, logging } from 'protractor';
import faker from 'faker';


describe('workspace-project App', () => {
  let page: AppPage;
  let faker = require('faker');

  beforeEach(() => {
    page = new AppPage();
  });

  it('should enter band detail and create band after click on add musician button', () => {
    page.navigateTo();
    let prizeName:string= faker.name.firstName();
    let prizeOrganization:string= faker.company.companyName();

    ;

    element(by.id('Artists')).click().then(function () {
      expect(element(by.id('band-name-0')).click().then(function () {
        page.clickButtonByID('add-prize-btn');
        page.setInputText('name',prizeName);
        page.setInputText('organization',prizeOrganization);
        page.setInputText('description',faker.lorem.sentence());
        page.clickButtonByID('create-prize-submit');
        page.setInputText('premiationDate',faker.date.past().toString());
        page.clickButtonByID('add-to-band-submit');
        page.clickButtonByClassName('cancel-btn');
        expect(page.searchTextById(`prize-name-${prizeName}`)).toBe(prizeName);
        expect(page.searchTextById(`prize-organization-${prizeName}`)).toBe(prizeOrganization);
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
