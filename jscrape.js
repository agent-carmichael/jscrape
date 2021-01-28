const puppeteer = require("puppeteer");

async function scraper() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.semanticscholar.org/search?q=news2&sort=relevance&pdf=true"
  );

  // Promise thrown!
  // await page.waitForSelector(
  //   ".cl-paper-row serp-papers__paper-row paper-row-normal"
  // );

  const results = await page.$$eval(
    ".cl-paper-row serp-papers__paper-row paper-row-normal",
    (links) => {
      return links;
    }
  );

  console.log(results);

  browser.close();
}

scraper();

/* PUPPETEER NOTES: Google '18

Operating chrome headless

Async ex.
puppeteer.launch().then(async browser => {
  const page = browser.newPage();
  await page.goto('$LINK');
  const html = await page.content(); 

  await browser.close();

  return html;
})


*/
