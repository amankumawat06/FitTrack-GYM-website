const menuIcon = document.getElementById("menu");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links ul li a");

// Toggle menu visibility
menuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Close menu on link click (in mobile view)
navLinkItems.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth <= 1100) {
      navLinks.classList.remove("show");
    }
  });
});


// Running Text code

const typed = new Typed(".multiple-text", {
  strings: [
    "Physical Fitness",
    "Weight Gain",
    "Strength Training",
    "Fat Lose",
    "Weight Lifting",
    "Running",
  ],
  typeSpeed: 60,
  backSpeed: 60,
  backDelay: 1000,
  loop: true,
});

// BMI Checker

const BMIbtn = document.querySelector(".calculate");

BMIbtn.addEventListener("click", () => {
  let heightInput = document.querySelector(".height");
  let weightInput = document.querySelector(".weight");
  const ShowBMI = document.querySelector(".showBMI");

  const height = parseFloat(heightInput.value);
  const weight = parseFloat(weightInput.value);

  if (!height || !weight || height <= 0 || weight <= 0) {
    ShowBMI.innerText = "⚠️ Please enter valid height and weight.";

    setTimeout(() => {
      ShowBMI.innerText = "";
      heightInput.value = "";
      weightInput.value = "";
    }, 3000);

    return;
  }

  const heightInMeters = height / 100;
  const bmi = weight / (heightInMeters * heightInMeters);
  let status = "";

  if (bmi < 18.5) status = "Underweight";
  else if (bmi < 24.9) status = "Normal weight";
  else if (bmi < 29.9) status = "Overweight";
  else status = "Obese";

  ShowBMI.innerText = `✅ Your BMI is ${bmi.toFixed(2)} (${status})`;
  
  setTimeout(() => {
    ShowBMI.innerText = "";
    heightInput.value = "";
    weightInput.value = "";
  }, 3000);
});


// Regristration Form script

window.addEventListener("DOMContentLoaded", () => {
  const registerButtons = document.querySelectorAll(".regrister button");
  const registerForm = document.getElementById("registerForm");
  const closeBtn = document.getElementById("closeRegister");

  registerButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      registerForm.style.display = "flex";
    });
  });
  

  closeBtn.addEventListener("click", () => {
    registerForm.style.display = "none";
  });

  registerForm.addEventListener("click", (e) => {
    if (e.target === registerForm) {
      registerForm.style.display = "none";
    }
  });
});


// Payment Script
document.querySelectorAll(".planJoinBtn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.getElementById("paymentModal").style.display = "flex";
  });
});

document.getElementById("closePayment").addEventListener("click", () => {
  document.getElementById("paymentModal").style.display = "none";
});

// Payment Handling
document.querySelectorAll(".payment-options button").forEach(button => {
  button.addEventListener("click", () => {
    const paymentStatus = document.querySelector(".payment-status");
    paymentStatus.innerText = "Processing Payment...";
    
    // Payment Success message
    setTimeout(() => {
      paymentStatus.innerText = "✅ Payment Successful!";
      alert("Payment Successful✅, Thanks for believe on us we will provide our best");

      // Close Payment box
      setTimeout(() => {
        document.getElementById("paymentModal").style.display = "none";
        paymentStatus.innerText = "";
      }, 2000);
    }, 2000);
  });
});


function openService(url) {
  const main = document.querySelector("main");
  main.classList.add("fade-out");

  setTimeout(() => {
    window.open(url, "_blank");
    main.classList.remove("fade-out");
  }, 500);
}
