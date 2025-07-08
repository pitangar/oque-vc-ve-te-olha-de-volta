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

  // Aqui o código do container:
  const container = document.createDocumentFragment();
  for(let i = 3; i <= 15; i++) {
    const bloco = document.createElement('section');
    bloco.className = `exercise ${i % 2 === 1 ? 'bloco1' : 'bloco2'}`;
    bloco.id = `desafio${i}`;

    bloco.innerHTML = `
      <div class="container-desafio">
        <div class="titulo-lado-esquerdo">
          <h2>DESAFIO ${i}</h2>
        </div>
        <div class="texto-lado-direito">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proposta do desafio ${i}.</p>
        </div>
      </div>`;
    container.appendChild(bloco);
  }
  document.body.insertBefore(container, document.getElementById('footer'));
});
