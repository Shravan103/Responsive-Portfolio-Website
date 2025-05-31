const menu = document.querySelector('#menu-icon');
const navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

  const typedText = document.querySelector(".typed-text");
  const cursor = document.querySelector(".cursor");

  const phrases = [
    "Shravan Adarker",
    "a Computer Engineer",
    "a Web Developer",
    "AI&ML Enthusiast",
    "Creative Problem Solver"
  ];

  let phraseIndex = 0;
  let letterIndex = 0;
  let currentPhrase = "";
  let isDeleting = false;
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenPhrases = 2000;

  function type() {
    if (phraseIndex >= phrases.length) phraseIndex = 0;
    currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
      typedText.textContent = currentPhrase.substring(0, letterIndex--);
      if (letterIndex < 0) {
        isDeleting = false;
        phraseIndex++;
        setTimeout(type, 500);
        return;
      }
    } else {
      typedText.textContent = currentPhrase.substring(0, letterIndex++);
      if (letterIndex > currentPhrase.length) {
        isDeleting = true;
        setTimeout(type, delayBetweenPhrases);
        return;
      }
    }
    setTimeout(type, isDeleting ? deletingSpeed : typingSpeed);
  }

  type();
