

import { test, expect } from '../src/fixtures/pagefixtures';
import { LoginPage } from '../src/pages/LoginPage';

import { CsvHelper } from '../src/utils/CsvHelper';
import { JsonHelper } from '../src/utils/JsonHelper';

test.beforeEach(async ({ loginPage,page }) => {
   
    await loginPage.goToLoginPage();
    
});

//AAA
test('@smoke login page title test', async ({ loginPage }) =>{

    let pageTitle = await loginPage.getPageTitle();
    console.log('Login page title : ', pageTitle);

    expect(pageTitle).toBe('Account Login');
});

test('@regression forgot pwd link exist test', async ({ loginPage }) => {
expect(await loginPage.isForgottenPwdLinkExist()).toBeTruthy();
});

test('regression user is able to login to app', async ({ loginPage, homePage})=>{

    await loginPage.doLogin(process.env.USERNAME!, process.env.PASSWORD!);
    
    expect.soft(await homePage.isLogoutLinkExist()).toBeTruthy();
    expect.soft(await homePage.getHomePageTitle()).toBe('My Account');
})
//DD_1: read csv data directly from the CSV file and loop the test method row wise....
let testData = CsvHelper.readCsv('src/testdata/logindata.csv');
for(let row of testData){

test(`regression login to app with invalid credentials- ${row.usernmae} - ${row.password}`,async({ loginPage,homePage})=>{

    await loginPage.doLogin(row.username,row.password);
    expect(await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();

});
}
//DD_2: read JSON data directly fromn the JSON file and loop the test method row wise...
let testJSONData = JsonHelper.readJson('src/testdata/logindata.json');
for(let row of testJSONData) {

    test(`@regression login to app with invalid credentials with Json Data- ${row.username} - ${row.password}`,async({ loginPage,homePage})=>{
       
        await loginPage.doLogin(row.username, row.password);
        expect (await loginPage.isInvalidLoginErrorDisplayed()).toBeTruthy();

    });
};

//common features test:

test('@smoke App logo exists on Login Page', async ({ basePage })=>{

expect(await basePage.isLogoVisible()).toBeTruthy();

});

test('@smoke SearchBox exists on Login Page', async ({ basePage }) =>{

    expect(await basePage.isSearchBoxVisible()).toBeTruthy();
});

test('@smoke Cart exists on Login Page', async ({ basePage }) =>{

    expect(await basePage.isCartButtonVisible()).toBeTruthy();
});

test('@smoke Footers exists on Login Page', async ({ basePage }) =>{

    expect(await basePage.getPageFootersCount()).toBeTruthy();
})




