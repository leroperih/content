 
    const movies_list_area = document.getElementById("movies-section");
    const movies_list_title = document.getElementById("movies-section-title");


    async function loadMovies()
    {
        try
        {

            const urlParams = new URLSearchParams(window.location.search);
            const which_language = urlParams.get('hl');

            const response = await fetch("content/script/movies.json");
            if (!response.ok) throw new Error("The JSON file was not found!");

            const dados = await response.json();

            const which_movie-lang = `movies-${which_language}`;
            const which-section-title = `section-title-${which_language}`;

            // Função que gera o HTML
            const createMoviesHTML = (which_movie) => `
                <div class="movies-list ${which_movie.genre-class}">

                    <div>
                        <img src="${which_movie.img-link}" alt="${which_movie.img-desc}">
                    </div>

                    <div>
                        <h2>${which_movie.title}</h2>
                        <p>GENRE: ${which_movie.genre-text}</p>
                    </div>

                </div>`;


            // Percorre o array de projetos do JSON

            movies_list_title.innerHTML += `<h2>${dados.section-title-de</h2>}`; 

            dados.movies-de.forEach( movie => {
                movies_list_area.innerHTML += createMoviesHTML(movie);
            });

        }
        catch (error)
        {
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