document.getElementById("warrantyForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
    alert("Your claim has been submitted successfully!");
    document.getElementById("warrantyForm").reset();
  });