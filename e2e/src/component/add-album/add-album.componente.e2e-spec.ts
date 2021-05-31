import {AddAlbumComponentPo} from './add-album.component.po';

describe('Check the component comment with integration services', () => {
  let page: AddAlbumComponentPo;

  beforeEach(() => {
    page = new AddAlbumComponentPo();
  });

  it('When the user open the page, he clicks on the add comment button, then he should look the next items : Album Name Cover Publication date Description Gender Record', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('btn-added');
    expect(page.searchTextById('h1-input-name')).toEqual('Album Name');
    expect(page.searchTextById('h1-input-cover')).toEqual('Cover');
    expect(page.searchTextById('h1-input-releaseDate')).toEqual('Publication date');
    expect(page.searchTextById('title-description-gender')).toEqual('Gender');
    expect(page.searchTextById('title-description-record')).toEqual('Record');
  });

  it('When the user open the page, he clicks on the add comment button, then he click in the  back button, ' +
    'then he should look the home', async () => {
    await page.navigateTo();
    await expect(page.searchTextById('Home')).toEqual('Home');
    await page.wait(3000);
    await page.clickButtonByClassName('btn-added');
    await expect(page.searchTextById('h1-input-name')).toEqual('Album Name');
    await expect(page.searchTextById('h1-input-cover')).toEqual('Cover');
    await expect(page.searchTextById('h1-input-releaseDate')).toEqual('Publication date');
    await expect(page.searchTextById('title-description-gender')).toEqual('Gender');
    await expect(page.searchTextById('title-description-record')).toEqual('Record');
    await page.clickButtonByID('Home');
    await expect(page.searchTextById('title 0')).toEqual('Buscando América');
  });

  it('When the user open the page, he clicks on the add comment button, he  filled out the album name with wrong parameters, then the pages shows an error', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('btn-added');
    expect(page.searchTextById('h1-input-name')).toEqual('Album Name');
    expect(page.searchTextById('h1-input-cover')).toEqual('Cover');
    expect(page.searchTextById('h1-input-releaseDate')).toEqual('Publication date');
    expect(page.searchTextById('title-description-gender')).toEqual('Gender');
    expect(page.searchTextById('title-description-record')).toEqual('Record');
    page.sendText('name', '11236*');
    expect(page.searchTextById('span-toast-message')).toEqual('The name should have the next: It must have with at least three letters and not get over 100 letters, also it can have only letters');
  });

  it('When the user open the page, he clicks on the add comment button, he  filled out the cover field with wrong parameters, then the pages shows an error', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('btn-added');
    expect(page.searchTextById('h1-input-name')).toEqual('Album Name');
    expect(page.searchTextById('h1-input-cover')).toEqual('Cover');
    expect(page.searchTextById('h1-input-releaseDate')).toEqual('Publication date');
    expect(page.searchTextById('title-description-gender')).toEqual('Gender');
    expect(page.searchTextById('title-description-record')).toEqual('Record');
    page.sendText('name', 'Preubas de concepto');
    page.sendText('cover', 'localhost');
    expect(page.searchTextById('span-toast-message')).toEqual('The url is not valid, you need to check it');
  });

  it('When the user open the page, he clicks on the add comment button, he  filled out the releaseDate field with wrong parameters, then the pages shows an error', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('btn-added');
    expect(page.searchTextById('h1-input-name')).toEqual('Album Name');
    expect(page.searchTextById('h1-input-cover')).toEqual('Cover');
    expect(page.searchTextById('h1-input-releaseDate')).toEqual('Publication date');
    expect(page.searchTextById('title-description-gender')).toEqual('Gender');
    expect(page.searchTextById('title-description-record')).toEqual('Record');
    page.sendText('name', 'Preubas de concepto');
    page.sendText('cover', 'https://i.ytimg.com/vi/CFFeAa0fJ0Y/maxresdefault.jpg');
    page.sendText('releaseDate', '2323322232');
    expect(page.searchTextById('span-toast-message')).toEqual('The date filled out wrong, It should have the next format: yyyy-MM-dd');
  });

  it('When the user open the page, he clicks on the add comment button, he  filled out the description field with wrong parameters, then the pages shows an error', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('btn-added');
    expect(page.searchTextById('h1-input-name')).toEqual('Album Name');
    expect(page.searchTextById('h1-input-cover')).toEqual('Cover');
    expect(page.searchTextById('h1-input-releaseDate')).toEqual('Publication date');
    expect(page.searchTextById('title-description-gender')).toEqual('Gender');
    expect(page.searchTextById('title-description-record')).toEqual('Record');
    page.sendText('name', 'Preubas de concepto');
    page.sendText('cover', 'https://i.ytimg.com/vi/CFFeAa0fJ0Y/maxresdefault.jpg');
    page.sendText('releaseDate', '2014-02-22');
    page.clearText('comment');
    page.sendText('comment', '11');
    expect(page.searchTextById('span-toast-message'))
      .toEqual('The cover should have the next: It must have with at least three letters and not get over 100 letters, also it can have only letters');
  });

});
