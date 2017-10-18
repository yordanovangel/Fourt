import {FourtPage} from './app.po';
import {browser, by, element} from 'protractor';


describe('fourt App', () => {
  let page: FourtPage;

  beforeEach(() => {
    page = new FourtPage();
  });

  it('should display the title', () => {
    page.navigateTo();
    const greenParagraphs = element(by.tagName('h1'));
    expect(greenParagraphs.getText()).toEqual('Personal tax calculator');
  });
  it('should display the img', () => {
    page.navigateTo();
    const img = element.all(by.className('custom-img-banner'));
    expect(img.count()).toEqual(1);
  });
  it('should navigate to find person page', () => {
    page.navigateTo();
    const img = element.all(by.id('searchBtn'));
    img.click();
    const expectedUrl = browser.driver.getCurrentUrl();
    expect(expectedUrl).toEqual('http://localhost:4200/find-person');
  });
  it('should have input', () => {
    browser.get('http://localhost:4200/find-person');
    const input = element.all(by.id('search'));
    expect(input.count()).toEqual(1);
  });
  it('should find a results', () => {
    browser.get('http://localhost:4200/find-person');
    const searchInput = element.all(by.id('search'));
    searchInput.clear();
    searchInput.sendKeys('Tom');
    const result = element.all(by.tagName('li'));
    expect(result.count()).toEqual(2);
  });
  it('should show person information', () => {
    browser.get('http://localhost:4200/find-person');
    const searchInput = element.all(by.id('search'));
    searchInput.clear();
    searchInput.sendKeys('Tom');
    const result = element.all(by.tagName('li')).get(1);
    result.click();
    const modalUserName = element(by.tagName('h3'));
    const resultsUsername = element.all(by.tagName('strong')).get(1);
    expect(modalUserName.getText()).toEqual(resultsUsername.getText());
  });

});
