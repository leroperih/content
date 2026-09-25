 
    const movies_list_area = document.querySelector('section#movies-section');
    const movies_list_title = document.querySelector('div#movies-section-title');


    async function loadMovies()
    {
        try
        {

            const urlParams = new URLSearchParams(window.location.search);
            const which_language = urlParams.get('hl');

            const response = await fetch("content/script/movies.json");
            if (!response.ok) throw new Error("The JSON file was not found!");
            const dados = await response.json();

            // Função que gera o HTML
            const createMoviesHTML = (movies) => `
                <div class="movies-list ${movies['genre-class']}">

                    <div>
                        <img src="${movies['img-link']}" alt="${movies['img-desc']}">
                    </div>

                    <div>
                        <h2>${movies['title']}</h2>
                        <p>GENRE: ${movies['genre-text']}</p>
                    </div>

                </div>`;


            // Percorre o array de projetos do JSON

            movies_list_title.innerHTML = `<h2>${dados[`section-title-${which_language}`]}</h2>`; 

            let completeHTML = "";

            dados[`movies-${which_language}`].forEach( movie => {
                completeHTML += createMoviesHTML(movie);
            });

            movies_list_area.innerHTML += completeHTML;

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