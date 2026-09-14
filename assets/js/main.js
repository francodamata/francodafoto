document.addEventListener('DOMContentLoaded', () => {
    // 1. Seleciona os botões e as imagens
    const filterButtons = document.querySelectorAll('.filter-button');
    const galleryItems = document.querySelectorAll('.gallery-item');

    // 2. Verifica se eles existem na página para não dar erro
    if (filterButtons.length > 0 && galleryItems.length > 0) {
        
        // 3. Adiciona o evento de clique em cada botão
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                
                // Tira a classe 'active' de todos os botões e coloca só no que foi clicado
                filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                // Pega o nome da categoria que está no botão (ex: 'natureza')
                const filterValue = button.getAttribute('data-filter');

                // Passa por cada imagem da galeria
                galleryItems.forEach(item => {
                    const category = item.getAttribute('data-category');
                    
                    // Se o botão for "Todos" ('all') ou a categoria da imagem bater com a do botão
                    if (filterValue === 'all' || filterValue === category) {
                        item.classList.remove('hidden');
                        item.classList.add('show');
                    } else {
                        // Se não bater, esconde a imagem
                        item.classList.remove('show');
                        item.classList.add('hidden');
                    }
                });
            });
        });
    }
});

