const webdriver = require('selenium-webdriver');

const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();

const By = webdriver.By;
const until = webdriver.until;
// ask the browser to open a page
driver.get("http://sjc04p1agcdb01:5100/agv");
driver.wait(until.elementLocated(By.className("iconNumber")));
var anchors = driver.findElements(By.tagName("a"));
for (var i=0; i < anchors.length; i++)
{
    var anchor = anchors[i];
    console.log(anchor);
    if (anchor.getAttribute("href").contains("551"))
    {
        anchor.click();
    }
}


