(function () {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;

  // init theme from storage or system preference
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === "dark" || saved === "light") {
    root.setAttribute("data-theme", saved);
  }

  // attach handler to toggle button (rendered in header)
  window.__toggleTheme = function () {
    const current = root.getAttribute("data-theme") ||
      (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem(STORAGE_KEY, next);
    const btn = document.getElementById("theme-toggle");
    if (btn) btn.textContent = next === "dark" ? "☀️" : "🌙";
  };

  // set initial button label if present
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("theme-toggle");
    if (btn) {
      const isDark = (root.getAttribute("data-theme") || "").includes("dark") ||
        (!root.hasAttribute("data-theme") && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
      btn.textContent = isDark ? "☀️" : "🌙";
    }
  });
})();
