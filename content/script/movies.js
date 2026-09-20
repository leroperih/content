

const movies_list_area = document.querySelector('section#movies-section');
const movies_list_title = document.querySelector('div#movies-section-title');

async function loadMovies() {
    try {
        // const urlParams = new URLSearchParams(window.location.search);
        // const which_language = urlParams.get('hl');

        const response = await fetch("content/script/movies.json");
        if (!response.ok) throw new Error("The JSON file was not found!");
        const dados = await response.json();

        // const which_movie_lang = `movies-${which_language}`;
        // const which_section_title = `section-title-${which_language}`;

        // CORREÇÃO: Mudado o parâmetro para 'movie' (sem hífen)
        // CORREÇÃO: Acesso às propriedades do JSON usando colchetes e aspas ['']
        const createMoviesHTML = (movie) => `
            <div class="movies-list ${movie['genre-class']}">

                <div>
                    <img src="${movie['img-link']}" alt="${movie['img-desc']}">
                </div>

                <div>
                    <h2>${movie.title}</h2>
                    <p>GENRE: ${movie['genre-text']}</p>
                </div>

            </div>`;

        // CORREÇÃO: Acesso à propriedade com hífen usando colchetes
        movies_list_title.innerHTML = `<h2>${dados['section-title-de']}</h2>`; 

        // CORREÇÃO: Acesso à propriedade com hífen usando colchetes
        dados['movies-de'].forEach(movie => {
            movies_list_area.innerHTML += createMoviesHTML(movie);
        });

    }
    catch (error) {
        console.error("Erro ao carregar o arquivo local:", error);
        movies_list_area.innerHTML += "<p>Erro ao carregar os filmes.</p>";
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