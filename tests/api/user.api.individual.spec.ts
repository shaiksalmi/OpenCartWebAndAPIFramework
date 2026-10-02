import { test, expect } from '../../src/fixtures/apifixtures';

const TOKEN = process.env.API_TOKEN;

let AUTH_HEADER = {

    Authorization: `Bearer ${TOKEN}`
};

//helper - generic function -- create a user (POST CALL):

async function createUser(apiHelper: any) {

    //User JS Object:

   let userData = {

    name: 'sangameshNair',
    email: `pwautomation_${Date.now()}@open.com`,
    gender: 'male',
    status: 'active'
   };
let response =  await apiHelper.post('/public/v2/users', userData,AUTH_HEADER);
expect(response.status).toBe(201);
return response.body;
}
    
//Test 1: Create a user test + verify: AAA
//POST -----> userID ----> GET / userID ---> verfiy
test('@regression Create a user test', async({ apiHelper }) =>{

    //create a user:

   let userResponse =  await createUser(apiHelper);   

   //get a user:
  let getResponse =  await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
  expect(getResponse.status).toBe(200);
  expect(getResponse.body.name).toBe('sangameshNair');

});



//Test 2: Update a user test + verify:AAA
//POST ---> userID ---> GET /userID --> PUT/userID ---> GET /userID ---> verify

test('regression Update a user test', async({ apiHelper }) =>{

    //update a user:

   let userResponse =  await createUser(apiHelper);   

   //2. get a user:

  let getResponse =  await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
  expect(getResponse.status).toBe(200);
  expect(getResponse.body.name).toBe('sangameshNair');

  //3. update a user:

  let userUpdateData = {

    name: 'apiAutomation-updated-name',
    status: 'inactive'
  }
 let updateResponse = await apiHelper.put(`/public/v2/users/${userResponse.id}`,userUpdateData, AUTH_HEADER);
 expect(updateResponse.status).toBe(200);
 expect(updateResponse.body.name).toBe(userUpdateData.name);
 expect(updateResponse.body.status).toBe(userUpdateData.status);

 //4. get a user:

 getResponse =  await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
  expect(getResponse.status).toBe(200);
  expect(getResponse.body.name).toBe(userUpdateData.name);
  expect(getResponse.body.status).toBe(userUpdateData.status);
});

//Test 3: Delete a user test + verify: AAA
//POST ----> userID ---> GET/userID--> Delete/userID (204) --> GET/userID (404) --> verify

test('@regression Delete a user test', async ({ apiHelper }) =>{

   //1.create a user: 
   let userResponse = await createUser(apiHelper);

   //2.get a user:

   let getResponse = await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
   expect(getResponse.status).toBe(200);
   expect(getResponse.body.name).toBe('sangameshNair');

   //3. delete a user:
   let updateResponse = await apiHelper.delete(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
   expect(updateResponse.status).toBe(204);

   //4. get a user:

   getResponse = await apiHelper.get(`/public/v2/users/${userResponse.id}`,AUTH_HEADER);
   expect(getResponse.status).toBe(404);
   expect(getResponse.body.message).toBe('Resource not found');





})