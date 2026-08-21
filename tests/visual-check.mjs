import { chromium } from "playwright-core"
import fs from "node:fs/promises"

const viewports = [
  ["small-phone", 360, 640],
  ["modern-phone", 390, 844],
  ["large-phone", 430, 932],
  ["phone-landscape", 667, 375],
  ["tablet-portrait", 768, 1024],
  ["tablet-landscape", 1024, 768],
  ["short-laptop", 1366, 650],
  ["desktop", 1440, 900],
  ["full-hd", 1920, 1080],
  ["ultrawide", 2560, 1080],
]

const baseUrl = process.env.BASE_URL ?? "http://127.0.0.1:4173"

await fs.mkdir("test-results", { recursive: true })

const browser = await chromium.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox"],
})

const results = []

for (const [name, width, height] of viewports) {
  const page = await browser.newPage({ viewport: { width, height } })
  await page.goto(baseUrl, { waitUntil: "networkidle" })
  await page.waitForTimeout(850)

  const metrics = await page.evaluate(() => {
    const selectors = [
      "[data-hero-brand]",
      "[data-hero-title]",
      ".button--nav",
      "#menu",
      "#story",
      "#order",
    ]

    return {
      overflow: document.documentElement.scrollWidth > document.documentElement.clientWidth + 1,
      missing: selectors.filter((selector) => {
        const element = document.querySelector(selector)
        if (!element) return true
        const rect = element.getBoundingClientRect()
        const style = getComputedStyle(element)
        return rect.width <= 0 || rect.height <= 0 || style.display === "none" || style.visibility === "hidden"
      }),
    }
  })

  if (["small-phone", "modern-phone", "tablet-portrait", "desktop", "full-hd"].includes(name)) {
    await page.screenshot({ path: `test-results/${name}.png`, fullPage: true })
  }

  results.push({ name, width, height, ...metrics })
  await page.close()
}

const motionPage = await browser.newPage({ viewport: { width: 1440, height: 900 } })
await motionPage.goto(baseUrl, { waitUntil: "networkidle" })
await motionPage.locator("#story").scrollIntoViewIfNeeded()

const motionSamples = []
for (let elapsed = 0; elapsed <= 7000; elapsed += 250) {
  if (elapsed) await motionPage.waitForTimeout(250)
  const values = await motionPage.evaluate(() => ({
    burger: Number(getComputedStyle(document.querySelector(".food-cycle__item--burger")).opacity),
    fries: Number(getComputedStyle(document.querySelector(".food-cycle__item--fries")).opacity),
    drink: Number(getComputedStyle(document.querySelector(".food-cycle__item--drink")).opacity),
  }))
  motionSamples.push({ elapsed, ...values })
}
const motion = {
  burger: Math.max(...motionSamples.map((sample) => sample.burger)),
  fries: Math.max(...motionSamples.map((sample) => sample.fries)),
  drink: Math.max(...motionSamples.map((sample) => sample.drink)),
  overlappingSamples: motionSamples.filter((sample) => [sample.burger, sample.fries, sample.drink].filter((value) => value > 0.65).length > 1).length,
}
await motionPage.close()

const reducedPage = await browser.newPage({ viewport: { width: 390, height: 844 }, reducedMotion: "reduce" })
await reducedPage.goto(baseUrl, { waitUntil: "networkidle" })
const reduced = await reducedPage.evaluate(() => ({
  burger: Number(getComputedStyle(document.querySelector(".food-cycle__item--burger")).opacity),
  fries: Number(getComputedStyle(document.querySelector(".food-cycle__item--fries")).opacity),
  drink: Number(getComputedStyle(document.querySelector(".food-cycle__item--drink")).opacity),
}))
await reducedPage.close()

const rtlPage = await browser.newPage({ viewport: { width: 390, height: 844 } })
await rtlPage.goto(baseUrl, { waitUntil: "networkidle" })
const rtlOverflow = await rtlPage.evaluate(() => {
  document.documentElement.dir = "rtl"
  return document.documentElement.scrollWidth > document.documentElement.clientWidth + 1
})
await rtlPage.close()

await browser.close()

const report = { results, motion, reduced, rtlOverflow }
await fs.writeFile("test-results/report.json", JSON.stringify(report, null, 2))
console.log(JSON.stringify(report, null, 2))

if (results.some((result) => result.overflow || result.missing.length) || rtlOverflow) process.exitCode = 1
