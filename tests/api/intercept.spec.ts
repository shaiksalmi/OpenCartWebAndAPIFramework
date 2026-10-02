import { test, expect } from '@playwright/test';

//web app --> intercept the network calls and log tthem.

test('@smoke intercept and log requests', async ({ page })=>{

    page.route('**/*', async (route)=> {

        console.log(route.request().method(),route.request().url());

        await route.continue(); //url -- capture, url2--capture...
    });
//navigate to web app:
await page.goto('https://naveenautomationlabs.com/opencart/index.php?route=common/home');
});

//intercept with mocking:
//mocking: fake data/response:
test('@smoke mock search with fake JSON',async ({ page }) =>{


//JS
let fakeProducts = [

    {name: 'Fake Macbook Pro', price: '$599' },
    {name: 'Fake Iphone 18', price: '$5999'},

];
//https://naveenautomationlabs.com/opencart/index.php?route=product/search&search=macbook
await page.route('**/index.php?route=product/search&search=macbook',async (route)=>{

   await route.fulfill({
    status:200,
    contentType: 'application/json',
    body: JSON.stringify(fakeProducts)

   });
});

await page.goto('https://abc.com/index.php?route=product/search&search=macbook');

await page.pause();
});