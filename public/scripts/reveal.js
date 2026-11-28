// Scroll reveal. Starts just before an element enters view so nothing is seen blank.
const io = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    }
  },
  { rootMargin: "0px 0px 15% 0px", threshold: 0 },
);
document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

// Tell no-js.js the reveal is running, so it doesn't fall back to showing everything.
document.documentElement.setAttribute("data-reveal", "ready");

// Cursor-following glow on cards (pointer devices only)
if (window.matchMedia("(hover: hover)").matches) {
  document.querySelectorAll(".card.glow").forEach((card) => {
    card.addEventListener("pointermove", (ev) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${ev.clientX - r.left}px`);
      card.style.setProperty("--my", `${ev.clientY - r.top}px`);
    });
  });
}
