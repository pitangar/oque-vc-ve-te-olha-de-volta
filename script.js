document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  if (!dropdown) return;

  const dropdownContent = dropdown.querySelector('.dropdown-content');
  if (!dropdownContent) return;

  // Inicialmente esconde dropdown
  dropdownContent.style.display = 'none';

  dropdown.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdownContent.style.display = 'none';
  });
});
