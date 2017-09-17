
/**
 * https://github.com/adamgruber/mochawesome
 * 测试报告
 */


var assert = require('assert');
var MongoClient = require("mongodb").MongoClient
var By = webdriver.By;
// Connection URL
const url = 'mongodb://localhost:27017/node_club_dev';

require('chromedriver')

describe('测试用户注册登录', function () {
    this.timeout(60 * 1000)
    let webdriver = require('selenium-webdriver')
    let driver = new webdriver.Builder().forBrowser('chrome').build();
    let user = new Date().valueOf()
    describe('注册用户', function () {
        it('导航到登录页面', async function () {
            await driver.get("http://127.0.0.1:3000")
        });
        it("点击注册按钮", async function () {
            await driver.findElement({ css: 'body > div.navbar > div > div > ul > li:nth-child(5) > a' }).click()
        });
        it("导航到用户注册页面", async function () {
            let singupurl = await driver.getCurrentUrl();
            return assert.equal("http://127.0.0.1:3000/signup", singupurl)
        });
        it("输入注册信息", async function () {
            await driver.findElement(By.css('[href="/signup"]')).click();
            driver.findElement(By.id('loginname')).sendKeys(user)
            driver.findElement(By.id('pass')).sendKeys('123456')
            driver.findElement(By.id('re_pass')).sendKeys('123456')
            driver.findElement(By.id('email')).sendKeys(`${user}@domain.com`)  // user+"@domain.com"
            driver.findElement(By.css('.span-primary')).click().then(function () {
                assert.equal(null, err);
                console.log('Connected correctly to server');
                let Connection = db.collection('users')
                Connection.find()
            })
        })
    });

});