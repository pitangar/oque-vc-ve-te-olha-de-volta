document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  dropdownContent.style.display = 'none'; // Esconde ao carregar

  dropdown.addEventListener('mouseenter', () => {
    dropdownContent.style.display = 'block';
  });

  dropdown.addEventListener('mouseleave', () => {
    dropdownContent.style.display = 'none';
  });
});
