import { test, expect } from '../src/fixtures/pagefixtures';

test.beforeEach(async ({ loginPage }) => {
  await loginPage.goToLoginPage();
});

test.skip('click on registration link', async ({ registrationPage }) => {
  await registrationPage.clickOnRegister();
  const headingText = await registrationPage.getHeaderText();
  expect(headingText).toBe('Register Account');
});

test.skip('successful registration', async ({ registrationPage }) => {
  await registrationPage.clickOnRegister();

  await registrationPage.fillRegistrationForm(
    process.env.FIRSTNAME,
    process.env.LASTNAME,
    process.env.EMAIL,
    process.env.TELEPHONE,
    process.env.REGPASSWORD,
    process.env.CONFIRMPASSWORD,

  );

  await registrationPage.selectSubscribeYes();
  await registrationPage.acceptPrivacyPolicy();
  await registrationPage.clickOnContinueButton();

  const successHeading = await registrationPage.getSuccessMessage();
  expect(successHeading).toBe('Your Account Has Been Created!');
});
