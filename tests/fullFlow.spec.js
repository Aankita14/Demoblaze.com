//npx playwright test tests/fullFlow.spec.js --project chromium --headed
import {test,expect} from '@playwright/test';
import { LoginPage } from '../Pages/loginPage';
import { HomePage } from '../Pages/HomePage';
import { CartPage } from '../Pages/CartPage';
import { PlaceOrderPage } from '../Pages/PlaceOrderPage';

test('test',async({page})=>{

    //Login
    const login = new LoginPage(page);
    await login.gotoLoginPage();
    await login.login('pavanol','test@123');
    await page.waitForTimeout(3000);

    //Home
    const home = new HomePage(page);
    await home.addProductToCart("Nexus 6");
    await page.waitForTimeout(3000);
    await home.gotoCart();


    //Cart
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    const status= await cart.checkProductIntocart("Nexus 6")
    expect(await status).toBe(true);

    //PlaceOrder
    const PlaceOrder = new PlaceOrderPage(page);
    await page.waitForTimeout(3000);
    await PlaceOrder.ClickOnPlaceOrder();
    await PlaceOrder.PlaceOrderForm();
    await PlaceOrder.ClickOnPurchaseBtn();
   const confirmationPage= page.locator('//h2[normalize-space()="Thank you for your purchase!"]');
   expect(confirmationPage).toHaveText("Thank you for your purchase!");
   await page.waitForTimeout(2000);

});
