function init() {
  import("./index.cases.js"); 
  import("./index.faq.js"); 
  import("./global.brand-carousel.js"); 
  import("./index.contact-us.js"); 
  import("./news-scroll.js"); 
  import("./index.consultation.js"); 
}

const totalPartials = document.querySelectorAll(
  '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});