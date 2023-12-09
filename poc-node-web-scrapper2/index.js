import puppeteer from "puppeteer";
import fs from "fs";
import { error } from "console";

const openWebPage = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 1000
    });

    const page = await browser.newPage();
    await page.goto("https://www.example.com");
    await browser.close();
}
// openWebPage()

const captureScreenshot = async () => {
    const browser = await puppeteer.launch({
        headless: 'new',
        slowMo: 400
    });

    const page = await browser.newPage();
    await page.goto('https://www.example.com');
    await page.screenshot({path: 'example.png'});
    await browser.close();
}
// captureScreenshot();

const navigateWebPage = async () => {
    const browser = await puppeteer.launch({
        slowMo: 200,
        headless: false,
    });
    const page = await browser.newPage();

    await page.goto("https://quotes.toscrape.com");
    await page.click('a[href="/login"]');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await browser.close();
}
// navigateWebPage();

const getDataFromWebPage = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.example.com');
    const data = await page.evaluate(() => {
        let title = document.querySelector('h1').innerText;
        let description = document.querySelector('p').innerText;
        return {
        title,
        description,
        }
    });
    console.log(data);
    await browser.close();
}
// getDataFromWebPage();

const handleDynamicWebPage = async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 200,
    });
    const page = await browser.newPage();

    await page.goto("https://quotes.toscrape.com");
    //   await page.waitForSelector('div[data-loaded="true"]'); // Asegúrate de reemplazar esto con el selector de CSS correcto.
    const data = await page.evaluate(() => {
            const quotes = document.querySelectorAll(".quote");
            const data = [...quotes].map((quote) => {
            const quoteText = quote.querySelector(".text").innerText;
            const author = quote.querySelector(".author").innerText;
            const tags = [...quote.querySelectorAll(".tag")].map(
                (tag) => tag.innerText
            );
            return {
                quoteText,
                author,
                tags,
            };
        });
        return data;
    });
    console.log(data);
    await browser.close();
}
// handleDynamicWebPage();

const quotes = async () => {
    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com");

    const data = await page.evaluate(() => {
        const quotes = document.querySelectorAll("#content-text");
        const x = [];
        const z = [];

        quotes.forEach((quote) => {
            i = 0;
            const author = quote;
            x.push(author);
        });

        if(x.length > 6) {
            for (let i = 0; i < 6; i++) {
                z.push(x[i])
            }
        }

        return quotes;
    });

    console.log(data);
    await new Promise((resolve) => setTimeout(resolve, 20000));
    await browser.close();
}
// quotes();