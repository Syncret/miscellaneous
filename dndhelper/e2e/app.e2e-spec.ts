import { DndhelperPage } from './app.po';

describe('dndhelper App', function() {
  let page: DndhelperPage;

  beforeEach(() => {
    page = new DndhelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
