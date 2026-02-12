const walker = document.getElementById("walker");
const leftLeg = document.querySelector(".left");
const rightLeg = document.querySelector(".right");
const leftFoot = document.querySelector(".left-foot");
const rightFoot = document.querySelector(".right-foot");
const pupils = document.querySelectorAll(".pupil");
const body = document.querySelector(".body");

let position = -150;
let step = 0;
let bounce = 0;

function animate() {
  // Move character forward
  position += 1.5;
  walker.style.left = position + "px";

  // Walking legs animation with smoother motion
  step += 0.12;
  const leftAngle = Math.sin(step) * 35;
  const rightAngle = Math.sin(step + Math.PI) * 35;
  
  leftLeg.style.transform = `rotate(${leftAngle}deg)`;
  rightLeg.style.transform = `rotate(${rightAngle}deg)`;
  
  // Feet rotation for more realistic walking
  leftFoot.style.transform = `rotate(${leftAngle * 0.5}deg)`;
  rightFoot.style.transform = `rotate(${rightAngle * 0.5}deg)`;

  // Body bounce effect
  bounce += 0.12;
  const bounceY = Math.abs(Math.sin(bounce)) * 8;
  body.style.transform = `translateY(-${bounceY}px)`;

  // Eye pupil movement (looking forward)
  const lookDirection = Math.sin(step * 0.5) * 2;
  pupils.forEach(pupil => {
    pupil.style.transform = `translate(calc(-50% + ${lookDirection}px), -50%)`;
  });

  // Reset when off screen
  if (position > window.innerWidth + 150) {
    position = -150;
  }

  requestAnimationFrame(animate);
}

// Add interaction: Click to make character jump
walker.addEventListener('click', () => {
  walker.style.transition = 'bottom 0.3s ease-out';
  walker.style.bottom = '35%';
  
  setTimeout(() => {
    walker.style.bottom = '20%';
  }, 300);
  
  setTimeout(() => {
    walker.style.transition = '';
  }, 600);
});

// Mouse follow effect for eyes
document.addEventListener('mousemove', (e) => {
  const rect = walker.getBoundingClientRect();
  const walkerCenterX = rect.left + rect.width / 2;
  const walkerCenterY = rect.top + rect.height / 3;
  
  const angle = Math.atan2(e.clientY - walkerCenterY, e.clientX - walkerCenterX);
  const distance = Math.min(3, Math.hypot(e.clientX - walkerCenterX, e.clientY - walkerCenterY) / 100);
  
  const moveX = Math.cos(angle) * distance;
  const moveY = Math.sin(angle) * distance;
  
  pupils.forEach(pupil => {
    pupil.style.transform = `translate(calc(-50% + ${moveX}px), calc(-50% + ${moveY}px))`;
  });
});

// Start animation
animate();