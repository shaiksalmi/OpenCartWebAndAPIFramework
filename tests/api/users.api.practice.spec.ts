

import { test, expect, APIResponse } from '@playwright/test';


let AUTH_TOKEN = {

    Authorization: 'Bearer 4b6a0a5b071664a71e742732292eff1c1fef65d1988c8dd933689808ac06e27e'
};

test.skip('get all users api test', async({ request })=>{

    let response: APIResponse = await request.get('https://gorest.co.in/public/v2/users',{

        headers: AUTH_TOKEN 

    });

    //console.log(response);

    let jsonBody = await response.json();
    console.log(jsonBody);
    console.log(response.status());
    console.log(response.statusText());

    //expect(response.status()).toBe(200);
});

test.skip('create a user POST api test', async ({ request })=>{

    //user JS Object

    let userData = {

        name: 'pw',
        email: `pwautomation_${Date.now()}@open.com`,
        gender: 'female',
        status: 'active'
    }
//JS Object ----> JSON (Serialization)
//JSON.stringify();

    let response = await request.post('https://gorest.co.in/public/v2/users', {

        headers: AUTH_TOKEN,
        data: userData
    });
   
    let jsonBody = await response.json();

    console.log(jsonBody);
    console.log(response.status());//201
    console.log(response.statusText()); // Created

    expect(response.status()).toBe(201);

});

test.skip('update a user PUT api test', async ({ request })=>{

    //user JS Object

    let userData = {

        name: 'pwUser',
        email: 'pwautomation@open.com',
        gender: 'male',
        status: 'active'
    }
//JS Object ----> JSON (Serialization)
//JSON.stringify();

    let response = await request.put('https://gorest.co.in/public/v2/users/8617740', {

        headers: AUTH_TOKEN,
        data: userData
    });
   
    let jsonBody = await response.json();

    console.log(jsonBody);
    console.log(response.status());//200
    console.log(response.statusText()); // Created

    expect(response.status()).toBe(200);

});

test.skip('delete a user DELETE api test', async ({ request })=>{


    let response = await request.delete('https://gorest.co.in/public/v2/users/8618896', {

        headers: AUTH_TOKEN,
        
    });
   
   

    console.log(response.status());//204
    console.log(response.statusText()); // Created

    expect(response.status()).toBe(204);

});