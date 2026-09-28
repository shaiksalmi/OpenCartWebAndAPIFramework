import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";

export class RegistrationPage extends BasePage {

    //1.private locators:

    private readonly registerPageLink : Locator;
    private readonly registerHeading : Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly telephone: Locator;
    private readonly password: Locator;
    private readonly confirmPassword: Locator;
    private readonly subscribe: Locator;
    private readonly privacyPolicyBox: Locator;
    private readonly continueBtn: Locator;
    private readonly successMessage: Locator;

//2.const... of the class...init the locators:
constructor(page: Page) {
        super(page);

         this.registerPageLink = page.getByRole('link', { name: 'Register'});
         this.registerHeading = page.getByRole('heading', { level: 1, name: 'Register Account' });
         this.firstName = page.getByRole('textbox', {name: '* First Name'});
         this.lastName = page.getByRole('textbox',{name: '* Last Name'});
         this.email = page.getByRole('textbox',{name: '* E-Mail' });
         this.telephone = page.getByRole('textbox', {name: '* Telephone'});
         this.password = page.locator('#input-password');
         this.confirmPassword = page.getByRole('textbox', { name: '* Password Confirm'});
         this.subscribe = page.getByRole('radio',{name: 'Yes'});
         this.privacyPolicyBox = page.locator('//input[@type="checkbox"]');
         this.continueBtn = page.getByRole('button', { name: 'Continue' });
        this.successMessage = page.getByRole('heading', { level: 1, name: 'Your Account Has Been Created!' });
        this.successMessage = page.getByRole('heading', { level: 1, name: 'Your Account Has Been Created!' });
}



//actions and assertion


async clickOnRegister(): Promise<void>{
return await this.registerPageLink.click();
    
}
async getHeaderText(): Promise<string> {

    return await this.registerHeading.innerText();
}

async fillRegistrationForm(firstName: string,
    lastName: string,
    email: string,
    telephone: string,
    password: string,
    confirmPassword: string

): Promise<void> {

    await this.firstName.fill(firstName);
    await this.lastName.fill(lastName);
    await this.email.fill(email);
    await this.telephone.fill(telephone);
    await this.password.fill(password);
    await this.confirmPassword.fill(confirmPassword);

}

async selectSubscribeYes(): Promise<void> {
  await this.subscribe.check();
}

async acceptPrivacyPolicy(): Promise<void> {
  await this.privacyPolicyBox.check();
}

async clickOnContinueButton(): Promise<void> {
  await this.continueBtn.click();
}

async getSuccessMessage(): Promise<string> {
  return await this.successMessage.innerText();
}
 
}