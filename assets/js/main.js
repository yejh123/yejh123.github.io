// Move masthead links that do not fit into the overflow list behind the toggle.
const TOGGLE_GAP_PX = 15;

const nav = document.querySelector(".site-nav");
const toggle = nav.querySelector(".site-nav__toggle");
const visibleLinks = nav.querySelector(".site-nav__links");
const overflowLinks = nav.querySelector(".site-nav__overflow");
const overflowWidths = [];

const widthOf = (element) => element.getBoundingClientRect().width;

function fitLinks() {
  const availableWidth = widthOf(nav) - (toggle.hidden ? 0 : widthOf(toggle) + TOGGLE_GAP_PX);
  if (widthOf(visibleLinks) > availableWidth) {
    overflowWidths.push(widthOf(visibleLinks));
    overflowLinks.prepend(visibleLinks.lastElementChild);
    toggle.hidden = false;
  } else {
    if (availableWidth > overflowWidths.at(-1)) {
      visibleLinks.append(overflowLinks.firstElementChild);
      overflowWidths.pop();
    }
    if (overflowWidths.length === 0) {
      toggle.hidden = true;
      overflowLinks.hidden = true;
      toggle.setAttribute("aria-expanded", "false");
    }
  }
  if (widthOf(visibleLinks) > availableWidth) fitLinks();
}

toggle.addEventListener("click", () => {
  overflowLinks.hidden = !overflowLinks.hidden;
  toggle.setAttribute("aria-expanded", String(!overflowLinks.hidden));
});
window.addEventListener("resize", fitLinks);
fitLinks();
