/* GSAP effect for the links */
gsap.from("#poza", {
  opacity: 0,
  y: -1200,
  duration: 0.5,
  ease: "power.out",
  onComplete: function () {
    gsap.fromTo(
      "#poza",
      { y: -50 },
      { y: 0, duration: 1, yoyo: true, repeat: -1 }
    );
  },
});

gsap.from("h1,h5, #poza2", {
  opacity: 0,
  y: 30,
  duration: 1,
  delay: 1,
  ease: "power2.out",
});

gsap.fromTo(
  "#scale",
  { rotate: "-1deg" },
  {
    rotate: "1deg",
    duration: 0.2,
    yoyo: true,
    repeat: -1,
  }
);
gsap.fromTo("#scale", { x: -10000 }, { x: 0, duration: 1.5 }, "<");

gsap.fromTo("#effect", { x: -10000 }, { x: 0, duration: 1.5 }, "<");

gsap.fromTo("#logoeffect", { y: 1000 }, { y: 0, duration: 2, delay: 1 });

// Salvare stare finală în localStorage când animația este completă
gsap.to("#poza", {
  onComplete: function () {
    localStorage.setItem(
      "animationState",
      JSON.stringify({
        opacity: parseFloat(document.getElementById("poza").style.opacity),
        transform: document.getElementById("poza").style.transform,
      })
    );
  },
});

// Verificare și restaurare a stării salvate
window.onload = function () {
  const savedState = JSON.parse(localStorage.getItem("animationState"));
  if (savedState) {
    document.getElementById("poza").style.opacity = savedState.opacity;
    document.getElementById("poza").style.transform = savedState.transform;
  }
};
