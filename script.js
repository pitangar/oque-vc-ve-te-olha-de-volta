document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach(dropdown => {
    const dropdownContent = dropdown.querySelector('.dropdown-content');
    dropdownContent.style.display = 'block';

    dropdown.addEventListener('mouseenter', () => {
      dropdownContent.style.display = 'none';
    });

    dropdown.addEventListener('mouseleave', () => {
      dropdownContent.style.display = 'none';
    });
  });
});
