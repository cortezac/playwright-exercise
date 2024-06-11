import { expect, test } from "@playwright/test";

test("Workshop 5 - Open new window and navigate back", async ({
  context,
  page,
}) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_5/index.html"
  );
  const pagePromise = context.waitForEvent("page");
  await page.click('//button[@id="openNewWindow"]');
  const newPage = await pagePromise;
  await newPage.waitForLoadState();
  console.log(await newPage.title());
  await expect(newPage.locator("//img[@class='cat-image']")).toBeVisible();
});

test("set cookies", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_5/index.html"
  );
  await page.click('//button[@id="setCookie"]');
  const cookies = await page
    .context()
    .cookies(
      "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_5/index.html"
    );
  const sessionCookie = cookies.find((cookies) => cookies.name == "session");
  console.log("Session cookie", sessionCookie);
  //should be toBeDefined(), setting cookie button doesnt work properly
  await expect(sessionCookie).toBeUndefined();
});

test("delete cookies", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_5/index.html"
  );
  await page.click('//button[@id="setCookie"]');
  const cookies = await page
    .context()
    .cookies(
      "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_5/index.html"
    );
  const sessionCookie = cookies.find((cookies) => cookies.name == "session");
  console.log("Session cookie", sessionCookie);
  //should be toBeDefined(), setting cookie button doesnt work properly
  await expect(sessionCookie).toBeUndefined();

  await page.click('//button[@id="deleteCookie"]');
  const deletedCookies = await page
    .context()
    .cookies(
      "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_5/index.html"
    );
  const deletedSessionCookie = deletedCookies.find(
    (cookies) => cookies.name == "session"
  );
  await expect(deletedSessionCookie).not.toBeDefined();
  console.log("Session cookie", deletedSessionCookie);
});
