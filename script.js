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

  // Dynamic Exercises

const plans = {
  muscle: {
    Monday: ["Bench Press", "Incline Dumbbell Press", "Cable Fly", "Push-ups"],
    Tuesday: ["Lat Pulldown", "Barbell Row", "Cable Row", "Pull-Ups"],
    Wednesday: ["Barbell Squats", "Leg Press", "Lunges", "Leg Curls"],
    Thursday: ["Overhead Press", "Lateral Raise", "Front Raise", "Shrugs"],
    Friday: ["Barbell Curl", "Hammer Curl", "Triceps Pushdown", "Skull Crushers"],
    Saturday: ["Deadlift", "Plank", "Hanging Leg Raise", "Russian Twists"],
    Sunday: "Rest"
  },
  weightLoss: {
    Monday: ["20-min Treadmill", "Chest Press", "Push-Ups", "Mountain Climbers"],
    Tuesday: ["15-min Cycle", "Lat Pulldown", "Barbell Row", "Crunches"],
    Wednesday: ["Squats", "Step-ups", "Lunges", "15-min Stairmaster"],
    Thursday: ["Shoulder Press", "Plank", "Bicycle Crunch", "Jump Rope"],
    Friday: ["HIIT Circuit", "Barbell Curl", "Skaters", "Knee Tucks"],
    Saturday: ["Full Body Circuit", "Pushups", "Jumping Jacks", "Cool Down Walk"],
    Sunday: "Rest"  
  },
  stamina: {
    Monday: ["Treadmill Run", "Squats", "Box Jumps", "Step-ups"],
    Tuesday: ["Push-ups", "Pull-ups", "Shoulder Press", "Wall Balls"],
    Wednesday: ["Plank", "Russian Twists", "Mountain Climbers", "Jump Rope"],
    Thursday: ["Jump Squats", "Burpees", "Skaters", "Lunges"],
    Friday: ["Deadlifts", "Battle Ropes", "Rowing Machine", "Rope Slams"],
    Saturday: ["Kettlebell Swings", "Med Ball Slams", "Jump Rope", "Walk"],
    Sunday: "Rest"
  }
};

function showPlan(goal) {
  const container = document.getElementById("exerciseGrid");
  container.innerHTML = "";

  for (const day in plans[goal]) {
    const card = document.createElement("div");
    card.className = "day-card";
    card.innerHTML = `<h2>${day}</h2>`;

    if (plans[goal][day] === "Rest") {
      card.classList.add("rest");
      card.innerHTML += `<p>Rest & Recovery 💤</p>`;
    } else {
      const list = plans[goal][day].map(item => `<li>${item}</li>`).join("");
      card.innerHTML += `<ul>${list}</ul>`;
    }

    container.appendChild(card);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("goal");
  showPlan(select.value);
  select.addEventListener("change", () => showPlan(select.value));
});
