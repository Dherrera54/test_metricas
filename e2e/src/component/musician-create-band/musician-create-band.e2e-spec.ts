import { AppPage } from './musician-create-band.po';
import { browser, by, element, logging } from 'protractor';
import faker from 'faker';


describe('workspace-project App', () => {
  let page: AppPage;
  let faker = require('faker');

  beforeEach(() => {
    page = new AppPage();
  });

  it('should enter band detail, create band after clicking on add musician button, and check its creation on musician list on band', () => {
    page.navigateTo();
    let musicianName:string= faker.name.findName();

    element(by.id('Artists')).click().then(function () {
      expect(element(by.id('band-name-0')).click().then(function () {
        page.clickButtonByID('add-musician-btn');
        page.setInputText('name',musicianName);
        page.setInputText('image',faker.image.imageUrl());
        page.setInputText('description',faker.lorem.sentence());
        page.setInputText('birthDate',faker.date.past().toString());
        page.clickButtonByClassName('submit-btn');
        page.clickButtonByClassName('cancel-btn');
        expect(page.searchTextById(`musician-name-${musicianName}`)).toBe(musicianName);
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
