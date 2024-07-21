export function copyPasteUnblock() {
  document.addEventListener(
    "copy",
    (e) => {
      e.stopImmediatePropagation();
    },
    true
  );

  document.addEventListener(
    "paste",
    (e) => {
      e.stopImmediatePropagation();
    },
    true
  );
}
