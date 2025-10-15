/*!
* Start Bootstrap - Modern Business v5.0.7 (https://startbootstrap.com/template-overviews/modern-business)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-modern-business/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", () => {
  const quickLinks = [
    { id: "sportIcon", url: "Sport.html" },
    { id: "cultureIcon", url: "blog.html#HeritageDees" },
    { id: "academicsIcon", url: "Academics.html" },
    { id: "rclIcon", url: "RCL.html" },
  ];

  quickLinks.forEach(({ id, url }) => {
    const trigger = document.getElementById(id);
    if (trigger) {
      trigger.addEventListener("click", () => {
        window.location.href = url;
      });
    }
  });

  const headerLogos = document.querySelectorAll("#headerLogo, .headerLogo");
  headerLogos.forEach((logo) => {
    logo.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  });

  const fbIcon = document.getElementById("fbIcon");
  if (fbIcon) {
    fbIcon.addEventListener("click", () => {
      window.location.href = "https://www.facebook.com/p/Suncrest-Sunspot-100057459520420/";
    });
  }

  const vrButton = document.getElementById("VRs");
  if (vrButton) {
    vrButton.addEventListener("click", () => {
      alert("hi");
    });
  }

  if (window.jQuery && typeof window.jQuery.fn.carousel === "function") {
    window.jQuery(".carousel").carousel({ interval: 2000 });
  }

  const backToTopButton = document.getElementById("btn-back-to-top");
  if (backToTopButton) {
    const toggleButton = () => {
      if (window.scrollY > 240) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    };

    window.addEventListener("scroll", toggleButton, { passive: true });
    toggleButton();

    backToTopButton.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
});
 

