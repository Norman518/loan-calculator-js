// Calculate Results
const calculateResults = () => {
  const amount = document.getElementById("amount"),
    // UI Vars
    interest = document.getElementById("interest"),
    years = document.getElementById("years"),
    calculatedPayments = parseFloat(years.value) * 12,
   
    monthlyPayment = document.getElementById("monthly-payment"),
    totalPayment = document.getElementById("total-payment"),
    totalInterest = document.getElementById("total-interest"),
    principal = parseFloat(amount.value),
    calculatedInterest = parseFloat(interest.value) / 100 / 12,
    // Compute monthly payment
    x = Math.pow(1 + calculatedInterest, calculatedPayments),
    monthly = (principal * x * calculatedInterest) / (x - 1);

  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = (monthly * calculatedPayments - principal).toFixed(2);

    // Show results
    document.getElementById("results").style.display = "block";

    // Hide loader
    document.getElementById("loading").style.display = "none";
  } else {
    showError("Please check your numbers");
  }
};

// Show Error
const showError = error => {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Hide loader
  document.getElementById("loading").style.display = "none";

  // Create a div
  const errorDiv = document.createElement("div");

  // Get elements
  const card = document.querySelector(".card");
  const heading = document.querySelector(".heading");

  // Add class
  errorDiv.className = "alert alert-danger";

  // Create text node and append to div
  errorDiv.appendChild(document.createTextNode(error));

  // Insert error above heading
  card.insertBefore(errorDiv, heading);

  // Clear error after 3 seconds
  setTimeout(clearError, 3000);
};

// Clear error
const clearError = () => {
  document.querySelector(".alert").remove();
};

// Listen for submit
document.getElementById("loan-form").addEventListener("submit", function(e) {
  // Hide results
  document.getElementById("results").style.display = "none";

  // Show loader
  document.getElementById("loading").style.display = "block";

  setTimeout(calculateResults, 2000);

  e.preventDefault();
});
