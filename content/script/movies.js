 
    const movies_list_area = document.querySelector('section#movies-section');
    const movies_list_title = document.querySelector('div#movies-section-title');


async function loadMovies() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        // Define 'en' como padrão caso o parâmetro 'hl' não seja encontrado na URL
        const which_language = urlParams.get('hl') || 'en';

        const response = await fetch("content/script/movies.json");
        if (!response.ok) throw new Error("The JSON file was not found!");
        const dados = await response.json();

        // AJUSTE AQUI: Acessando o objeto interno com a sintaxe de colchetes [which_language]
        const createMoviesHTML = (movie) => `
            <div class="movies-list ${movie['genre-class']}">
                <div>
                    <img src="${movie['img-link']}" alt="${movie['img-desc'][which_language]}">
                </div>
                <div>
                    <h2>${movie['title'][which_language]}</h2>
                    <p>GENRE: ${movie['genre-text'][which_language]}</p>
                </div>
            </div>`;

        // Define o título da seção
        movies_list_title.innerHTML = `<h2>${dados["section-title"][which_language]}</h2>`;

        // Otimização usando map e join para gerar o HTML completo
        const completeHTML = dados.movies.map(createMoviesHTML).join('');

        // Injeta o HTML completo na área de destino
        movies_list_area.innerHTML = completeHTML;

        // Caso nenhum filme seja renderizado
        if (dados.movies.length === 0) {
            movies_list_area.innerHTML = "<p>Nenhum filme disponível.</p>";
        }

    } catch (error) {
        console.error("Erro ao carregar o arquivo local:", error);
        movies_list_area.innerHTML = "<p>Erro ao carregar os filmes.</p>";
    }
}

loadMovies();








    const language_br = document.getElementById('language1');
    const language_de = document.getElementById('language2');
    const language_en = document.getElementById('language3');

    function toggleLanguage(langName, checkbox)
    {
        const targets = document.getElementsByClassName(langName);
        const displayStyle = checkbox.checked ? 'block' : 'none';

        for (let target of targets) {
            target.style.display = displayStyle;
        }
    }

    // Wrap in an anonymous function to pass arguments
    language_br.addEventListener('change', function () {
        toggleLanguage("portugues", this);
    });

    language_de.addEventListener('change', function () {
        toggleLanguage("deutsch", this);
    });

    language_en.addEventListener('change', function () {
        toggleLanguage("english", this);
    });