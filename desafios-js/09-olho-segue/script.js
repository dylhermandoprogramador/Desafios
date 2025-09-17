const pupils = document.querySelectorAll(".pupil");

window.addEventListener("mousemove", (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  pupils.forEach((pupil) => {
    const eye = pupil.parentElement;
    const rect = eye.getBoundingClientRect();

    const eyeCenterX = rect.left + rect.width / 2;
    const eyeCenterY = rect.top + rect.height / 2;

    const dx = mouseX - eyeCenterX;
    const dy = mouseY - eyeCenterY;

    const maxX = (rect.width / 2) - (pupil.offsetWidth / 2);
    const maxY = (rect.height / 2) - (pupil.offsetHeight / 2);

    const angle = Math.atan2(dy, dx);

    const pupilX = Math.cos(angle) * Math.min(Math.abs(dx), maxX);
    const pupilY = Math.sin(angle) * Math.min(Math.abs(dy), maxY);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
  });
});
