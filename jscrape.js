const puppeteer = require("puppeteer");

async function scraper() {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  await page.goto(
    "https://www.semanticscholar.org/search?q=news2&sort=relevance&pdf=true"
  );

  await page.waitForSelector(".result-page");

  const html = await page.content();

  const results = await page.$eval(".result-page", (links) => {
    return links;
  });

  properHTML = html.toString().includes("result-page");

  console.log(html, results);
  console.log(properHTML);

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
