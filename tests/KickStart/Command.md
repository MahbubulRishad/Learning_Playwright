npx playwright test	-> Runs all tests in the project.

npx playwright test <file>.spec.ts ->	Runs a specific test file.

npx playwright test -g "test name"	-> 	Runs a test that matches the given title.

npx playwright test --project=chromium	-> 	Runs tests only in the Chromium project.

npx playwright test --headed -> 	Runs tests with a visible browser.

npx playwright test --debug	-> 	Opens the debugger UI for step-by-step debugging.

npx playwright test --trace on		-> Records trace files for each test.

npx playwright test --reporter=html		-> Generates an HTML report.

npx playwright show-report		-> Opens the HTML test report.

npx playwright test --project-chromium --headed <file>.spec.ts ->  Running the specific test file only chromium in headed mode 