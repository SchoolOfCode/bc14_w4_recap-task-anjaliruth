import { test, expect } from "@playwright/test";

const url = "http://192.168.0.100:3000";

// test.describe("My tweet test suite", function() {

//     test.beforeEach(async ({ page }) => {
//         await page.goto(url);
//     })
//      test("Empty input field" , async ({ page }) => {
//         const inputField = page.getByRole("textbox", { name: "Task" });
//         expect(inputField).toBeEmpty();

// })
// })

// User navigates to the URL where the app is running
// User types a username/name into the "Name" input
// Input should now contain the name they've entered
// User types a tweet into the "Tweet" text area
// Text area should now contain the tweet they've entered
test("Navigate to page", async ({ page }) => {
  await page.goto(url);
  const nameField = page.getByRole("textbox", { name: "Name:" });
  const nameText = "rockstartbynight";
  await nameField.fill(nameText);
  await expect(nameField).toHaveValue(nameText);
  const tweetField = page.getByRole("textbox", { name: "Tweet: " });
  const tweetText = "I am secretly Hannah Montana";
  await tweetField.fill(tweetText);
  await expect(tweetField).toHaveValue(tweetText);

  const button = page.getByRole("button", { name: "Send Tweet!" });
  await button.click();

  const myTweetUsername = page.locator("#tweets-list li:nth-child(4) span");
  const myTweet = page.locator("#tweets-list li:nth-child(4) ");
  const combinedUsernameAndTweet = nameText + " " + tweetText;

  await expect(myTweetUsername).toHaveText(nameText);
  await expect(myTweet).toHaveText(combinedUsernameAndTweet);
  await expect(nameField).toBeEmpty()
  await expect(tweetField).toBeEmpty()
});
// User clicks on the "Send tweet!" button
// Both the input and text area should have been cleared, and a new entry should have been added to the list
