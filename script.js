window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });
  <script>
  document.addEventListener("DOMContentLoaded", () => {
    const text = "Welcome to Yechina Lokesh's Portfolio";
    const heroText = document.getElementById("hero-text");
    let index = 0;

    function type() {
      if (index < text.length) {
        heroText.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed as needed
      }
    }

    type();
  });
</script>

  
  document.addEventListener('DOMContentLoaded', function () {
    const typedText = document.querySelector('.typed-text');
    const text = typedText.textContent;
    typedText.textContent = '';
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            typedText.textContent += text[index];
            index++;
            setTimeout(typeEffect, 100); // Adjust typing speed here
        }
    }

    typeEffect();
});
