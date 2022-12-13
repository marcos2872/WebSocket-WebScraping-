/* eslint-disable @typescript-eslint/no-var-requires */
const puppeteer = require("puppeteer");

export const scraping = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://br.betano.com/');

  const pageData = await page.evaluate(() => {
    const divContainer = document.querySelector('.events-list__wrapper');
    const table = divContainer?.querySelectorAll('.events-list__grid__event');

    const results = [] as string[][];
    table?.forEach((e) => {
      const arrayText = e.textContent?.split('\n',);
      const removeSpaces = arrayText?.map((s) => s.trim().replaceAll("\\s+", " "));
      const removeEmpty = removeSpaces?.filter((e) => e) as string[]
      results.push(removeEmpty)
    })
      const structuring = results?.map((curr) => {
        if (curr[4] === 'SO') {
          return {
            date: curr[0],
            time: curr[1],
            event: `${curr[2]} X ${curr[3]}`,
            teamA: curr[2],
            teamB: curr[3],
            superOdds: true,
            odds: {
              hose: curr[7],
              draw: curr[9],
              outside: curr[11],
            }
        }
      }
        return {
          date: curr[0],
          time: curr[1],
          event: `${curr[2]} X ${curr[3]}`,
          teamA: curr[2],
          teamB: curr[3],
          odds: {
            hose: curr[6],
            draw: curr[8],
            outside: curr[10],
          }
        }
    })
    return structuring;
  });

  await browser.close();
  return pageData;
}

