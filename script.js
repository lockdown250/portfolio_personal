document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("dragstart", (event) => event.preventDefault());
  });

  document.addEventListener("keydown", (event) => {
    const blockedKey =
      event.key === "PrintScreen" ||
      (event.ctrlKey && ["s", "u", "p", "c"].includes(event.key.toLowerCase())) ||
      (event.ctrlKey && event.shiftKey && ["i", "j", "c"].includes(event.key.toLowerCase())) ||
      event.key === "F12";

    if (blockedKey) {
      event.preventDefault();
    }
  });
});
