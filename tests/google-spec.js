module.exports = {
    'Demo test Google' : function (browser) {
        browser
            .url('https://google.com')
            .waitForElementVisible('body', 1000)
            .assert.hidden("table")
            .click('.search-panel-button')
            .setValue('input[type=text]', '10 Lucknow street')
            .pause(2000)
            .keys(browser.Keys.DOWN_ARROW)
            .keys(browser.Keys.ENTER)
            .waitForElementVisible('table', 3000)
            .assert.visible("table")
            .assert.visible(".leaflet-clickable")
            .click(".leaflet-clickable > i")
            .pause(2000)
            .getTagName("table", function(result) {
                console.log(result);
            })
            .end();
    }
};