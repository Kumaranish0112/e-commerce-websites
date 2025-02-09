document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navList = document.querySelector(".nav-list");

  menuToggle.addEventListener("click", function () {
    navList.classList.toggle("show");
  });
});

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  console.log("JavaScript Loaded!");

  // Smooth scrolling for navigation links
  document.querySelectorAll("nav ul li a").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = e.target.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });

  // Search functionality
  const searchInput = document.getElementById("search");
  const searchButton = document.querySelector(".btn");

  searchButton.addEventListener("click", () => {
    let query = searchInput.value.toLowerCase();
    let products = document.querySelectorAll(".box");

    products.forEach((product) => {
      let productName = product.querySelector("h2").innerText.toLowerCase();
      if (productName.includes(query)) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });

  // Restore all products when clearing the search box
  searchInput.addEventListener("input", () => {
    if (searchInput.value === "") {
      document.querySelectorAll(".box").forEach((product) => {
        product.style.display = "block";
      });
    }
  });

  // Click event for "Shop Now" button (smooth scroll to products)
  document.querySelector(".align").addEventListener("click", () => {
    const productSection = document.querySelector(".shopping-section");
    productSection.scrollIntoView({ behavior: "smooth" });
  });

  // Add event listeners to product boxes for interaction
  document.querySelectorAll(".box").forEach((box) => {
    box.addEventListener("click", () => {
      let productName = box.querySelector("h2").innerText;
      let productPrice = box.querySelector(".hover").innerText.split("\n")[0];
      alert(`You clicked on ${productName} - ${productPrice}`);
    });
  });

  // Log-in button alert
  document.querySelector(".log-in").addEventListener("click", (e) => {
    e.preventDefault();
    alert("Login functionality coming soon!");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const heading = document.querySelector(".first-half h1");

  // Array of texts to rotate
  const textArray = [
    "Handcrafted Wooden Toys",
    "Eco-Friendly Wooden Toys",
    "Perfect Gifts for Kids & Toddlers",
    "Bring Joy with Wooden Toys!",
  ];

  let index = 0;

  // Function to update the heading text every 3 seconds
  setInterval(() => {
    index = (index + 1) % textArray.length; // Loop through the array
    heading.innerText = textArray[index];
  }, 3000);

  // Add CSS animation effect dynamically
  heading.style.transition = "color 0.5s ease-in-out";
  heading.addEventListener("mouseover", () => {
    heading.style.color = "brown"; // Change color on hover
  });
  heading.addEventListener("mouseout", () => {
    heading.style.color = "black"; // Reset color on mouse out
  });
});
