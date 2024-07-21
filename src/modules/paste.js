export function pasteUnblock() {
  document.addEventListener(
    "paste",
    (e) => {
      e.stopImmediatePropagation();
    },
    true
  );
}
