
import { test, expect } from '../src/fixtures/pagefixtures';


test.beforeEach(async ({ loginPage}) =>{

    await loginPage.goToLoginPage();
    await loginPage.doLogin(process.env.USERNAME,process.env.PASSWORD);
});

test('verify product header',async ({ homePage, searchResultsPage, productInfoPage})=>{



    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    await expect(await productInfoPage.getProductHeader()).toBe('MacBook Pro');

});

test('verify product images count', async ({ homePage,searchResultsPage, productInfoPage,page }) =>{

    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    expect( await productInfoPage.getProductImagesCount()).toBe(4);
    await page.pause();

});

test('verify product information/data',async({ homePage, searchResultsPage, productInfoPage,page})=>{
    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');
    
let actaulProductInfoMap = await productInfoPage.getProductInfo();
console.log('Actual Product Details: ', actaulProductInfoMap);

expect.soft(actaulProductInfoMap.get('productheader')).toBe('MacBook Pro');
expect.soft(actaulProductInfoMap.get('productimagescount')).toBe(4);
expect.soft(actaulProductInfoMap.get('Brand')).toBe('Apple');
expect.soft(actaulProductInfoMap.get('Product Code')).toBe('Product 18');
expect.soft(actaulProductInfoMap.get('Reward Points')).toBe('800');
expect.soft(actaulProductInfoMap.get('Availability')).toBe('Out Of Stock');
expect.soft(actaulProductInfoMap.get('productprice')).toBe('$2,000.00');
expect.soft(actaulProductInfoMap.get('extaxprice')).toBe('$2,000.00');

})
    
test('verify product added to cart', async ({ homePage, searchResultsPage, productInfoPage }) => {
    await homePage.doSearch('macbook');
    await searchResultsPage.selectProduct('MacBook Pro');

    const productName = await productInfoPage.getProductHeader();
    await productInfoPage.addToCart('1');

    const isAdded = await productInfoPage.isProductAddedToCart(productName);
    expect(isAdded).toBeTruthy();
});


//common features test:

test('App logo exists on Login Page', async ({ basePage })=>{

expect(await basePage.isLogoVisible()).toBeTruthy();

});

test('SearchBox exists on Login Page', async ({ basePage }) =>{

    expect(await basePage.isSearchBoxVisible()).toBeTruthy();
});

test(' Cart exists on Login Page', async ({ basePage }) =>{

    expect(await basePage.isCartButtonVisible()).toBeTruthy();
});

test('Footers exists on Login Page', async ({ basePage }) =>{

    expect(await basePage.getPageFootersCount()).toBeTruthy();
})

