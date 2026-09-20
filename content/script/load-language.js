
const main = document.querySelector('main');
const all_study_div_links = document.querySelectorAll('div.study a');





async function LoadLanguage()
{

    try {

        const url_parameters = new URLSearchParams(window.location.search);

        const hl_url_parameter = url_parameters.get("hl");


        if (all_study_div_links)
        {

            all_study_div_links.forEach(link => {

                link.href += `?hl=${hl_url_parameter}`;

            });

        }


    }
    catch (error)
    {

        console.error(`Não foi possivel realizar a alterações dos links para o idioma correto. ERRO: ${error}`);

        main.innerHTML += "<p>Não foi possivel carregar os links com idiomas corretos</div>";

    }
}



LoadLanguage();