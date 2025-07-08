document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.querySelector('.dropdown');
  const dropdownContent = dropdown.querySelector('.dropdown-content');

  dropdownContent.style.display = 'none';

  // Mostra o menu ao entrar no dropdown ou no conteúdo
  const showMenu = () => {
    dropdownContent.style.display = 'block';
  };

  // Esconde o menu ao sair do dropdown e do conteúdo
  const hideMenu = () => {
    dropdownContent.style.display = 'none';
  };

  dropdown.addEventListener('mouseenter', showMenu);
  dropdown.addEventListener('mouseleave', () => {
    // Só esconde se o mouse NÃO estiver no dropdownContent
    setTimeout(() => {
      if (!dropdown.matches(':hover') && !dropdownContent.matches(':hover')) {
        hideMenu();
      }
    }, 100);
  });

  dropdownContent.addEventListener('mouseenter', showMenu);
  dropdownContent.addEventListener('mouseleave', () => {
    setTimeout(() => {
      if (!dropdown.matches(':hover') && !dropdownContent.matches(':hover')) {
        hideMenu();
      }
    }, 100);
  });

  // Navegação suave para links com hash (#)
  const links = document.querySelectorAll('nav a[href^="#"]');
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementById(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Fecha o menu após clicar
        hideMenu();
      }
    });
  });
});
