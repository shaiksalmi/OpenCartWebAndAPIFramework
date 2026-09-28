
 import { Locator, Page } from "@playwright/test";
 import { BasePage } from "./BasePage";
 
 export class HomePage extends BasePage {

//1.private locators:

private readonly logoutLink: Locator;
private readonly headers: Locator;
private readonly searchBox: Locator;
private readonly searchIcon: Locator;

//2.const... of the class...init the locators:

constructor(page: Page) {

    super(page);
    this.logoutLink = page.getByRole('link' , { name: 'Logout' });
    this.headers = page.getByRole('heading', {level: 2});
    this.searchBox = page.getByRole('textbox', { name: 'Search'});
    this.searchIcon = page.locator('#search button')
}
//page actions
async isLogoutLinkExist(): Promise<boolean> {

    return await this.logoutLink.isVisible();
}

async getHomePageTitle(): Promise<string> {

   return await this.page.title();
}

async getHomePageHeaders(): Promise<string[]> {

    return await this.headers.allInnerTexts();
}

async doSearch(searchKey: string){

    console.log('searchKey: ', searchKey);
    await this.searchBox.fill(searchKey);
    await this.searchIcon.click();
}
 }