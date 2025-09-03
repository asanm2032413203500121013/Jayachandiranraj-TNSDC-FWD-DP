// Modal Functions
function openModal(title) {
  document.getElementById('modal').style.display = 'flex';
  document.getElementById('modal-title').textContent = title;
}

function closeModal() {
  document.getElementById('modal').style.display = 'none';
}

// Upload Profile Photo
document.getElementById('upload-photo').addEventListener('change', function(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function(e) {
      document.getElementById('profile-photo').src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Typing Effect
const typingText = "Web Developer | Tech Enthusiast | Karate Player";
let i = 0;
function typeEffect() {
  if (i < typingText.length) {
    document.getElementById('typing').textContent += typingText.charAt(i);
    i++;
    setTimeout(typeEffect, 100);
  }
}
window.onload = typeEffect;