import {SearchComponentPo} from './search.component.po';

describe('Check the component searcher', () => {
  let page: SearchComponentPo;

  beforeEach(() => {
    page = new SearchComponentPo();
  });

  it('The user clicks in the search option, then he should look up the cards', () => {
    page.navigateTo();
    expect(page.searchTextById('Searcher')).toEqual('Searcher');
    page.wait(3000);
    page.clickButtonByID('Searcher');
    expect(page.searchTextById('title 0')).toEqual('Buscando América');
  });

  it('The user clicks in the search option, then the user filters the cards by name', () => {
    page.navigateTo();
    expect(page.searchTextById('Searcher')).toEqual('Searcher');
    page.wait(3000);
    page.clickButtonByID('Searcher');
    expect(page.searchTextById('title 0')).toEqual('Buscando América');
    page.clearText('search-text');
    page.sendText('search-text', 'Buscando América');
    expect(page.searchTextById('title 0')).toEqual('Buscando América');
  });

});
