This NZ Tax App which calculates how much tax is required to be paid in dollars by the individual (ie. me as a contractor) based on the whole amount entered as the indiviuals singular income for that tax year.

HTML:

Structure: HTML provides the structure of the webpage.
Input Field: There's an input field (<input type="number" id="incomeInput">) where users can enter their income.

Button: A button (<button id="calculateButton">) for triggering the tax calculation.
Result Display: A <div> element (<div id="result"></div>) to display the calculated tax amount.

CSS:

Styling: CSS is used to style the HTML elements.
Layout: The .container class centers the content and adds padding and borders for better presentation.
Input/Button Styling: Styles are applied to the input field and button for uniformity and aesthetics (padding, border-radius, etc.).

JavaScript:

Functionality: JavaScript adds interactive features.
Event Listener: Listens for a click event on the calculate button.
Tax Calculation: When the button is clicked, it retrieves the user's income from the input field, calculates the tax based on the tax brackets, and then displays the result in the result <div>.

Overall Workflow
User Interaction: The user enters their income in the input field.
Calculation Trigger: Upon clicking the calculate button, JavaScript calculates the tax.
Display Result: The calculated tax is displayed on the webpage.

Sources: 
"Tax Rates for Individuals" by Inland Revenue Department(New Zealand) accessed online from:
https://www.ird.govt.nz/income-tax/income-tax-for-individuals/tax-codes-and-tax-rates-for-individuals/tax-rates-for-individuals on Tuesday 21st November, 2023 at 3:06pm (NZST)
