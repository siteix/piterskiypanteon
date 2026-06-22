const modal = document.querySelector("[data-modal]");
const openButtons = document.querySelectorAll("[data-open-modal]");
const closeButtons = document.querySelectorAll("[data-close-modal]");
const header = document.querySelector("[data-header]");
const form = document.querySelector(".lead-form form");

function openModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

openButtons.forEach((button) => button.addEventListener("click", openModal));
closeButtons.forEach((button) => button.addEventListener("click", closeModal));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.classList.contains("is-open")) {
    closeModal();
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const submit = form.querySelector(".form-submit");
  submit.textContent = "Заявка принята";
  submit.disabled = true;
  setTimeout(() => {
    submit.textContent = "Хочу узнать больше о программе";
    submit.disabled = false;
    closeModal();
    form.reset();
  }, 1600);
});

window.addEventListener("scroll", () => {
  header.style.background = window.scrollY > 24
    ? "rgba(247, 245, 239, .92)"
    : "rgba(247, 245, 239, .76)";
}, { passive: true });
