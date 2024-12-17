# Playwright Course
This repository is part of the [Playwright - Complete Beginner Course](https://sdetunicorns.com/course/playwright-complete-beginner-course/) on Udemy.

## Install packages
`npm install`

## Run test
`LNG=de-DE  ENV npx playwright test`
`npx playwright test {filename}`
only one worker 
`LNG=de-DE ENV=stagqa npx playwright test --workers=1`
to run in debug mode
`PWDEBUG=1 npx playwright test`

To handle cases where tests might have either one or both tags (@smoke and @regression)
You can use the --grep and --grep-invert options in the Playwright CLI:
	1.	Run Only Smoke Tests:
`npx playwright test --grep @smoke`
	2.	Run Tests with Both Tags:
`npx playwright test --grep "@smoke|@regression"`
	3.	Exclude Smoke Tests:
`npx playwright test --grep-invert @smoke`

