document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  // Inicialmente esconde dropdown
  dropdownContent.style.display = 'none';

  dropdown.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdownContent.style.display = 'none';
  });
});
