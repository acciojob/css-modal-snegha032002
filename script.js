//your JS code here. If required.
// Get modal elements
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModal");
const closeModalBtn = document.getElementById("closeModal");

// Open modal
openModalBtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

// Close modal when clicking the close button
closeModalBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close modal when clicking outside the modal content
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

