import {test} from '@playwright/test'
import { CommonPageMethods, CommonPageMethods } from '../pages/common-page/common-page-methods'
import { LoginPageMethods } from '../pages/login-page/login-page-methods'

test('Login',async({page})=>{
const CommonPageMethods = new CommonPageMethods(page)
const LoginPageMethods = new LoginPageMethods(page)

await CommonPageMethods.navigateToTheApp()
await LoginPageMethods.insertUsername(userCredentials.usernames.standardUser)
await LoginPageMethods.insertPassword(userCredentials.password)
await LoginPageMethods.clickOnLoginButton()
await page.waitForTimeout(4000)

})