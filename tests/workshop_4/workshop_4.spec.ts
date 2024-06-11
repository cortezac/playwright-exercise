import { expect, test } from "@playwright/test";

test("Workshop 4 - Handling alerts", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_4/index.html"
  );
  let alertMessage;
  //This deals with Pop-ups and alerts
  page.on("dialog", async (dialog) => {
    expect(dialog.type()).toBe("alert");
    alertMessage = dialog.message();
    await dialog.accept();
  });
  await page.click("//button[@id='show-alert']");
  expect(alertMessage).toBe("This is a simple alert.");
  console.log(alertMessage);
});

test("Dismissing alerts", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_4/index.html"
  );

  let alertMessage;
  //This deals with Pop-ups and alerts
  page.on("dialog", async (dialog) => {
    alertMessage = dialog.message();
    await dialog.dismiss();
  });
  await page.click("//button[@id='show-confirm']");

  expect(alertMessage).toBe("You clicked Cancel.");
  console.log(alertMessage);
});

test("Confirming alerts", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_4/index.html"
  );

  let alertMessage;
  //This deals with Pop-ups and alerts
  page.on("dialog", async (dialog) => {
    alertMessage = dialog.message();
    await dialog.accept();
  });
  await page.click("//button[@id='show-confirm']");

  expect(alertMessage).toBe("You clicked OK.");
  console.log(alertMessage);
});

test("Pop-ups", async ({ page }) => {
  await page.goto(
    "file:///C:/Users/arc/Desktop/Projects/playwright-exercise/tests/workshop_4/index.html"
  );
  const [popup] = await Promise.all([
    page.waitForEvent("popup"),
    page.click("//button[@id='open-popup']"),
  ]);

  await popup.waitForLoadState();

  await popup.close();
});
