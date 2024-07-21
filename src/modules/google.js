export function disableRedirects() {
  for (let element of document.querySelectorAll("a")) {
    let newLink = document.createElement("a");

    newLink.href = element.href;
    newLink.innerHTML = element.innerHTML;
    if (element.className) newLink.className = element.className;

    element.replaceWith(newLink);
  }
}
