// Ensure that the script runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Attach event listener to the form submission
  document
    .getElementById("expense-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      var Expensename = document.getElementById("expense-name").value;
      var Expenseamount = document.getElementById("expense-amount").value;
      var date = document.getElementById("expense-date").value;

      // Create a new row
      var newRow = document.createElement("tr");

      newRow.innerHTML =
        "<td>" +
        Expensename +
        "</td>" +
        "<td>" +
        Expenseamount +
        "</td>" +
        "<td>" +
        date +
        "</td>";

      // Append the new row to the table body
      document.getElementById("expense-body").appendChild(newRow);

      // Reset input fields
      document.getElementById("expense-name").value = "";
      document.getElementById("expense-amount").value = "";
      document.getElementById("expense-date").value = "";
    });
});
