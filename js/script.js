document.addEventListener("DOMContentLoaded", function () {
    const roles = ["Mobile Developer", "Game Developer", "Problem Solver"];
    const roleElement = document.querySelector(".dynamic-role");
  
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
  
    function typeRoles() {
      const currentRole = roles[roleIndex];
      const currentText = isDeleting
        ? currentRole.substring(0, charIndex--)
        : currentRole.substring(0, charIndex++);
  
      roleElement.textContent = currentText;
  
      let typingSpeed = isDeleting ? 100 : 200;
  
      if (!isDeleting && charIndex === currentRole.length) {
        isDeleting = true;
        typingSpeed = 1000;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
  
      setTimeout(typeRoles, typingSpeed);
    }
    typeRoles();
    
    const modal = document.getElementById("projectModal");
    const closeBtn = document.querySelector(".close-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const modalTitle = document.getElementById("modalTitle");
    const modalDescription = document.getElementById("modalDescription");
    const modalImage = document.getElementById("modalImage");
  
    projectCards.forEach(card => {
        card.addEventListener("click", function () {
            const title = card.querySelector("h3").textContent;
            const description = card.getAttribute("data-description");
            const imageSrc = card.getAttribute("data-image");
  
            modalTitle.textContent = title;
            modalDescription.textContent = description;
            modalImage.src = imageSrc;
  
            modal.style.display = "block";
        });
    });
  
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });
  
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});