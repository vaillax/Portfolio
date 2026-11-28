const nav = document.getElementById("nav");
const btn = nav.querySelector(".toggle");
const setOpen = (open) => {
  nav.classList.toggle("open", open);
  btn.setAttribute("aria-expanded", String(open));
  btn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  document.body.style.overflow = open ? "hidden" : "";
};
btn.addEventListener("click", () => setOpen(!nav.classList.contains("open")));
nav.querySelectorAll("#menu a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
window.addEventListener("keydown", (e) => e.key === "Escape" && setOpen(false));

const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 12);
onScroll();
window.addEventListener("scroll", onScroll, { passive: true });
