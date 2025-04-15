exports.PlaceOrderPage = 
class PlaceOrderPage{
    constructor(page){
        this.page=page;
        this.placeorderLink = '//button[normalize-space()="Place Order"]'
        this.placeorderName = '#name'
        this.placeorderCountry = '#country'
        this.placeorderCity = '#city'
        this.placeorderCreditcard = '#card'
        this.placeorderMonth = '#month'
        this.placeorderYear = '#year'
        this.purchaseButton = 'button[onclick="purchaseOrder()"]'
    }

    async ClickOnPlaceOrder(){
        await this.page.locator(this.placeorderLink).click();
    }

    async PlaceOrderForm(){
        await this.page.locator(this.placeorderName).fill("Ankita");
        await this.page.locator(this.placeorderCountry).fill("india");
        await this.page.locator(this.placeorderCity);
        await this.page.locator(this.placeorderCreditcard).fill("89856324458");
        await this.page.locator(this.placeorderMonth).fill("April");
        await this.page.locator(this.placeorderYear).fill("2026");

    }

    async ClickOnPurchaseBtn(){
        await this.page.locator(this.purchaseButton).click();    }
}