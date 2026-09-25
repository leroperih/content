
const content_list_section = document.querySelector("div.content-list-section");
const header_title = document.querySelector("header h1");



async function loadExercises() {

    try {

        // PARAMÊTROS DA URL
        const urlParams = new URLSearchParams(window.location.search);
        const url_language = urlParams.get('hl');
        const url_module = urlParams.get('mo');
        const url_episode = urlParams.get('ep');

        // ARQUIVO .JSON
        const response = await fetch(`exercises/mo-${url_module}_ep-${url_episode}.json`);

        if (!response.ok) throw new Error("O arquivo JSON não foi encontrado!");

        const dados = await response.json();

        // Acessando a propriedade do idioma diretamente pela variável
        header_title.innerHTML = dados.episode[url_language];

    } catch (error) {
        // Corrigido para url_module (com 'e') e usando crases corretamente
        content_list_section.innerHTML = `<p>Erro ao carregar a visualização dos exercícios do módulo ${url_module}</p>`;
        console.error(error); // Boa prática para ver o erro real no console do navegador
    }

}


loadExercises();