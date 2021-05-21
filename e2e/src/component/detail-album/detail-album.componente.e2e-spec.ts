import {DetailAlbumComponentPo} from './detail-album.component.po';

describe('Check the component detail with integration services', () => {
  let page: DetailAlbumComponentPo;

  beforeEach(() => {
    page = new DetailAlbumComponentPo();
  });

  it('When the user open the page should show the next text in the header', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
  });

  it('When the user open the page should click in the first album, then he should look the detail', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('detail-album');
    page.wait(3000);
    expect(page.searchTextById('description-detail-album')).toEqual('Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.');
  });

  it('When the user open the page should click in the first album, then he should look the detail, then he goes back', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('detail-album');
    page.wait(3000);
    expect(page.searchTextById('description-detail-album')).toEqual('Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.');
    page.clickButtonById('btn-go-back');
    page.wait(3000);
    expect(page.searchTextById('Home')).toEqual('Home');
  });
});
