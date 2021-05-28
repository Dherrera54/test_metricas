import {CommentComponentPo} from './comment.component.po';

describe('Check the component  add  comment with integration services', () => {
  let page: CommentComponentPo;

  beforeEach(() => {
    page = new CommentComponentPo();
  });

  it('When the user open the page should click in the first album, then he should look the detail, ' +
    'finally the user clicks in comment', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('detail-album');
    page.wait(3000);
    expect(page.searchTextById('description-detail-album')).toEqual('Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.');
    page.clickButtonById('btn-go-comment');
    page.wait(1000);
    expect(page.searchTextById('title-content')).toEqual('Comment');
  });

  it('When the user open the page should click in the first album, then he should look the detail, ' +
    'finally the user clicks in comment without comment', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('detail-album');
    page.wait(3000);
    expect(page.searchTextById('description-detail-album')).toEqual('Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.');
    page.clickButtonById('btn-go-comment');
    page.wait(1000);
    expect(page.searchTextById('title-content')).toEqual('Comment');
    page.clickComBox('option', '5');
    page.clickButtonById('btn-added-comment');
    expect(page.searchTextById('span-toast-message'))
      .toEqual('You must fill out all fields');
  });

  it('When the user open the page should click in the first album, then he should look the detail, ' +
    'finally the user clicks in comment without score', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('detail-album');
    page.wait(3000);
    expect(page.searchTextById('description-detail-album')).toEqual('Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.');
    page.clickButtonById('btn-go-comment');
    page.wait(1000);
    expect(page.searchTextById('title-content')).toEqual('Comment');
    page.sendText('comment', 'RPRUEBA');
    page.clickButtonById('btn-added-comment');
    expect(page.searchTextById('span-toast-message'))
      .toEqual('You must fill out all fields');
  });

  it('When the user open the page should click in the first album, then he should look the detail, ' +
    'finally the user clicks in comment without corrects fields', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('detail-album');
    page.wait(3000);
    expect(page.searchTextById('description-detail-album')).toEqual('Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.');
    page.clickButtonById('btn-go-comment');
    page.wait(1000);
    expect(page.searchTextById('title-content')).toEqual('Comment');
    page.sendText('comment', 'RPRUEBA');
    page.clickComBox('option', '5');
    page.clickButtonById('btn-added-comment');
    expect(page.searchTextById('span-toast-message'))
      .toEqual('You process was success');
  });

  it('When the user open the page should click in the first album, then he should look the detail, ' +
    'finally the user clicks in go back button', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('detail-album');
    page.wait(3000);
    expect(page.searchTextById('description-detail-album')).toEqual('Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.');
    page.clickButtonById('btn-go-comment');
    page.wait(1000);
    expect(page.searchTextById('title-content')).toEqual('Comment');
    page.sendText('comment', 'RPRUEBA');
    page.clickComBox('option', '5');
    page.clickButtonById('btn-added-comment');
    expect(page.searchTextById('span-toast-message'))
      .toEqual('You process was success');
    page.clickButtonById('btn-go-back');
    expect(page.searchTextById('description-detail-album')).toEqual('Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.');
  });

  it('When the user open the page should click in the first album, then he should look the detail, ' +
    'finally the user clicks in comment without corrects fields and check the table', () => {
    page.navigateTo();
    expect(page.searchTextById('Home')).toEqual('Home');
    page.wait(3000);
    page.clickButtonByClassName('detail-album');
    page.wait(3000);
    expect(page.searchTextById('description-detail-album')).toEqual('Buscando América es el primer álbum de la banda de Rubén Blades y Seis del Solar lanzado en 1984. La producción, bajo el sello Elektra, fusiona diferentes ritmos musicales tales como la salsa, reggae, rock, y el jazz latino. El disco fue grabado en Eurosound Studios en Nueva York entre mayo y agosto de 1983.');
    page.clickButtonById('btn-go-comment');
    page.wait(1000);
    expect(page.searchTextById('title-content')).toEqual('Comment');
    page.sendText('comment', 'RPRUEBA');
    page.clickComBox('option', '5');
    page.clickButtonById('btn-added-comment');
    expect(page.searchTextById('span-toast-message'))
      .toEqual('You process was success');
    expect(page.searchTextById('text-content-1')).toEqual('RPRUEBA');
  });

});
