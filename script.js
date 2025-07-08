document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  // Garante que o menu começa escondido
  dropdownContent.classList.remove('show');

  dropdown.addEventListener('mouseenter', () => {
    dropdownContent.classList.add('show');
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdownContent.classList.remove('show');
  });
});
