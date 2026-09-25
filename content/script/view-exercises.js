
const content_list_section = document.querySelector("div.content-list-section");
const header_title = document.querySelector("header h1");



async function loadExercises() {

    try {

        // ### GET DATA

        // URL PARAMETERS
        const urlParams = new URLSearchParams(window.location.search);
        const url_language = urlParams.get('hl');
        if (url_language != "de" || url_language != "en" || url_language != "pt") { url_language = "pt" }
        const url_module = urlParams.get('mo');
        const url_episode = urlParams.get('ep');

        // .JSON FILE
        const response = await fetch(`exercises/mo-${url_module}_ep-${url_episode}.json`);
        if (!response.ok) throw new Error("O arquivo JSON não foi encontrado!");
        const dados = await response.json();


        // ### USE DATA

        // HEADER TITLE
        header_title.innerHTML = dados.episode[url_language];

        content_list_section.innerHTML = "";

        const which_board = 1;

        dados.tasks.forEach( task => {

            content_list_section.innerHTML += `<h2>${task.task_title[`${url_language}`]}</h2>`;

            content_list_section.innerHTML += '<div class="exercises-board"></div>';

            const exercises_board = document.querySelector("div.exercises-board"); // :nth-of-type()

            task.content.forEach( html => {

                exercises_board.innerHTML += `<${html.type}>${html.text[`${url_language}`]}</${html.type}>`;

            });

            content_list_section.innerHTML = `<div class="code"><code>${task.comment}</code></div>`

        });

    } catch (error) {
        // Corrigido para url_module (com 'e') e usando crases corretamente
        content_list_section.innerHTML = `<p>Erro ao carregar a visualização dos exercícios</p>`;
        console.error(error); // Boa prática para ver o erro real no console do navegador
    }

}


loadExercises();