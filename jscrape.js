const puppeteer = require("puppeteer");
const $ = require("cheerio");
const url =
  "https://www.semanticscholar.org/search?q=news2&sort=relevance&pdf=true";

puppeteer
  .launch({
    headless: false,
  })
  .then(function (browser) {
    return browser.newPage();
  })
  .then(function (page) {
    return page.goto(url).then(function () {
      return page.content();
    });
  })
  .then(function (html) {
    console.log(html);
    console.log("-------------------");
    $("div", html).each(function () {
      console.log($(this).text());
    });
  })
  .catch(function (err) {
    console.log(err);
    return err;
  });
