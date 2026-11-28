// Loaded synchronously in <head> so it runs before first paint (no flash).
// Removing "no-js" lets .reveal sections start hidden and fade in on scroll.
(function () {
  var root = document.documentElement;
  root.classList.remove("no-js");

  // Fallback: deferred/module scripts finish (or fail) before DOMContentLoaded.
  // If reveal.js didn't mark itself ready by then (blocked, 404, or threw),
  // restore "no-js" so the existing .no-js .reveal rule keeps every section visible.
  document.addEventListener("DOMContentLoaded", function () {
    if (!root.hasAttribute("data-reveal")) root.classList.add("no-js");
  });
})();
