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
    return page
      .goto(url, {
        waitUntil: ["load", "domcontentloaded"],
      })
      .then(async function () {
        cookieBtn = await page.$(".copyright-banner__dismiss-btn");
        await cookieBtn.click();
        await page.reload({
          waitUntil: ["load", "domcontentloaded"],
        });
        return page.content();
      });
  })
  .then(function (html) {
    // console.log(html);
    // console.log(html.includes("serp-papers__paper-row paper-row-normal"));
    // console.log("-------------------");
    $("div.cl-paper-row serp-papers__paper-row paper-row-normal", html).each(
      function () {
        console.log($(this));
      }
    );
  })
  .catch(function (err) {
    console.log(err);
    return err;
  });
