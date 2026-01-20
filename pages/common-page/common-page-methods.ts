export class CommonPageMethods{
private page
constructor(page){
    this.page = page
}

    async navigateToTheApp(){
      await this.page.goto('https://www.saucedemo.com/')
    }

}