describe('hooks', function () {
    var assert = require('assert');
    require('chromedriver')
    this.timeout(60 * 1000)
    let webdriver = require('selenium-webdriver')
    let driver = new webdriver.Builder().forBrowser('chrome').build();

    before(function () {
        // runs before all tests in this block
        describe('注册用户', function () {
            it('导航到登录页面', async function () {
                await driver.get("http://127.0.0.1:3000")
                //console.log("before")
            });

            after(function () {
                // runs after all tests in this block  
                //console.log("after")
                driver.quit()

            });

            beforeEach(function () {
                // runs before each test in this block
                console.log("beforeeach")
            });

            afterEach(function () {
                // runs after each test in this block
                console.log('aftereach')
            });

            // test cases
            // it('assert', () => {
            //     assert.equal(-1, [1, 2, 3].indexOf(0));
            // });
            //  it('should return -1 when the value is not present', function () {
            //     assert.equal(-1, [1, 2, 3].indexOf(5));
        });
    });
});
