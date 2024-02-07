<script>
      // Array of objects representing tax brackets.
      const taxBrackets = [
        { minIncome: 0, maxIncome: 14000, taxRate: 0.105 },
        { minIncome: 14001, maxIncome: 48000, taxRate: 0.175 },
        { minIncome: 48001, maxIncome: 70000, taxRate: 0.3 },
        { minIncome: 70001, maxIncome: 180000, taxRate: 0.33 },
        { minIncome: 180001, maxIncome: Infinity, taxRate: 0.39 },
      ];

      document.addEventListener("DOMContentLoaded", function () {
        // Initialize the tax calculator UI by setting up event listeners.

        // Event listener for the 'Start' button.
        document
          .getElementById("startButton")
          .addEventListener("click", function () {
            this.style.display = "none"; // Hide the 'Start' button.
            document.getElementById("primaryIncomePrompt").style.display =
              "block"; // Show the primary income prompt.
            document.getElementById("resetButton").style.display = "block"; // Show the 'Reset' button.
          });

        // Event listener for transitioning from primary to secondary income.
        document
          .getElementById("toSecondaryIncome")
          .addEventListener("click", function () {
            document.getElementById("primaryIncomePrompt").style.display =
              "none"; // Hide primary income prompt.
            document.getElementById("secondaryIncomePrompt").style.display =
              "block"; // Show secondary income prompt.
          });

        // Event listener for transitioning to deductibles input.
        document
          .getElementById("toDeductibles")
          .addEventListener("click", function () {
            document.getElementById("secondaryIncomePrompt").style.display =
              "none"; // Hide secondary income prompt.
            document.getElementById("deductiblesPrompt").style.display =
              "block"; // Show deductibles prompt.
          });

        // Event listener for the 'Reset' button.
        document
          .getElementById("resetButton")
          .addEventListener("click", resetCalculator);

        // Event listener for calculating tax based on user inputs.
        document
          .getElementById("calculateTax")
          .addEventListener("click", calculateTax);
      });

      // Resets the calculator to its initial state.
      function resetCalculator() {
        // Clear all input fields.
        document
          .querySelectorAll('input[type="number"]')
          .forEach((input) => (input.value = ""));

        // Hide all prompts and the result display.
        [
          "primaryIncomePrompt",
          "secondaryIncomePrompt",
          "deductiblesPrompt",
          "result",
        ].forEach((id) => {
          document.getElementById(id).style.display = "none";
        });

        // Show the 'Start' button and hide the 'Reset' button.
        document.getElementById("startButton").style.display = "block";
        document.getElementById("resetButton").style.display = "none";
      }

      // Calculates the total tax based on inputs and tax brackets.
      function calculateTax() {
        let primaryIncome = Number(
          document.getElementById("primaryIncomeInput").value
        );
        let secondaryIncome = Number(
          document.getElementById("secondaryIncomeInput").value || 0
        );
        let deductibles = Number(
          document.getElementById("deductiblesInput").value || 0
        );

        let totalIncome = primaryIncome + secondaryIncome - deductibles;
        let taxAmount = getTaxAmount(totalIncome);

        document.getElementById(
          "result"
        ).innerText = `Your total tax amount is: ${taxAmount.toFixed(2)}`;
        document.getElementById("deductiblesPrompt").style.display = "none";
        document.getElementById("result").style.display = "block";
      }

      // Utilizes the tax brackets to calculate the tax based on total income.
      function getTaxAmount(totalIncome) {
        let taxAmount = 0;
        let incomeLeft = totalIncome;

        for (let bracket of taxBrackets) {
          if (incomeLeft <= 0) break;

          let bracketIncome = Math.min(
            incomeLeft,
            bracket.maxIncome - bracket.minIncome
          );
          taxAmount += bracketIncome * bracket.taxRate;
          incomeLeft -= bracketIncome;
        }

        return taxAmount;
      }
    </script>
