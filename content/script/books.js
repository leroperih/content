 
    const content_list_section = document.getElementById("content-list-section");


    async function loadBooks()
    {
        try
        {
            const response = await fetch("../content/script/books.json");
            if (!response.ok) throw new Error("The JSON file was not found!");

            const dados = await response.json();

            // Função que gera o HTML
            const createProjectHTML = (books) => `
            <!-- A BOOK -->
            <div class="book-section ${books.lang}"> <!-- BOOK -->

                <div class="book-cover">
                    <img src="${books.img}" alt="Book's Cover">
                </div>

                <div>
                    <h2> ${books.title} </h2>
                    <p> ${books.desc} </p>
                    <a href="${books.link}" target="_blank" rel="noopener noreferrer"> Leia agora no site Gutenberg </a>
                </div>

            </div>`;


            // Percorre o array de projetos do JSON
            dados.books.forEach( book => {
                content_list_section.innerHTML += createProjectHTML(book);
            });

        } catch (error) {
            console.error("Erro ao carregar o arquivo local:", error);
            content_list_section.innerHTML += "<p>Erro ao carregar projetos.</p>";
        }
    }

    loadBooks();












    const language_br = document.getElementById('language1');
    const language_de = document.getElementById('language2');
    const language_en = document.getElementById('language3');


    function toggleLanguage()
    {
        const targets = document.getElementsByClassName(this.name);
        const displayStyle = this.checked ? 'block' : 'none';

        for (let target of targets)
        { target.style.display = displayStyle; }
    }

    language_br.addEventListener('change', toggleLanguage());
    language_de.addEventListener('change', toggleLanguage());
    language_en.addEventListener('change', toggleLanguage());
