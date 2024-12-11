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