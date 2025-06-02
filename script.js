document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("markdown-container");
  if (!el) return;

  // always resolve article.md relative to the current document
  const articleUrl = new URL("article.md", window.location.href).pathname;

  fetch(articleUrl)
    .then(r => {
      if (!r.ok) throw new Error(`Cannot fetch ${articleUrl}`);
      return r.text();
    })
    .then(md => (el.innerHTML = marked.parse(md)))
    .catch(err => {
      el.innerHTML = "<p>Error loading article.</p>";
      console.error(err);
    });
});
