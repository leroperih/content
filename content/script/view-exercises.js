
const content_list_section = document.querySelector("div.content-list-section");
const header_title = document.querySelector("header h1");



async function loadExercises() {

    try {

        // ### GET DATA

        // URL PARAMETERS
        const urlParams = new URLSearchParams(window.location.search);
        // Alterado para 'let' para permitir reatribuição se o idioma não for suportado
        let url_language = urlParams.get('hl');

        // Corrigido para && (se não for de, E não for en, E não for pt, mude para pt)
        if (url_language !== "de" && url_language !== "en" && url_language !== "pt") {
            url_language = "pt";
        }
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

        dados.tasks.forEach(task => {

            // 1. Cria os elementos estruturais na memória para não quebrar a seleção
            const taskContainer = document.createElement('div');
            taskContainer.className = "task-container"; // Container para agrupar o título e o board desta task

            const titleHTML = `<h2>${task.task_title[url_language]}</h2>`;
            const boardHTML = `<div class="exercises-board"></div>`;
            const commentHTML = `<div class="code"><code>${task.comment}</code></div>`;

            // Adiciona a estrutura inicial da task no container
            taskContainer.innerHTML = titleHTML + boardHTML + commentHTML;

            // 2. Busca o quadro de exercícios especificamente DENTRO deste container
            const exercises_board = taskContainer.querySelector("div.exercises-board");

            // 3. Alimenta o quadro de exercícios
            task.content.forEach(html => {
                exercises_board.innerHTML += `<${html.type}>${html.text[url_language]}</${html.type}>`;
            });

            // 4. Adiciona o container completo ao DOM (usa += para acumular e não apagar as anteriores)
            content_list_section.appendChild(taskContainer);

        });

    } catch (error) {
        // Corrigido para url_module (com 'e') e usando crases corretamente
        content_list_section.innerHTML = `<p>Erro ao carregar a visualização dos exercícios</p>`;
        console.error(error); // Boa prática para ver o erro real no console do navegador
    }

}


loadExercises();