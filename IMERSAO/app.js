// Função para pesquisar e exibir os resultados na página
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão inseridos
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value

// Limpa a string de pesquisa e verifica se está vazia ou contém apenas espaços em branco
campoPesquisa = campoPesquisa.trim().toLowerCase();
if (campoPesquisa === "") {
  section.innerHTML = `<p class="sem-resultados">Por favor, insira um termo de pesquisa válido.</p>`;
  return;
}
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descricao = "";
  
    // Itera sobre cada dado na lista de resultados
      for (let dado of dados) {
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase()
      //  Pesquisa um titulo ou descricao que condiz com o informado na pesquisa
        if (dado.titulo.includes(campoPesquisa) || (dado.descricao).includes(campoPesquisa) || (dado.tags).includes(campoPesquisa)) {

      // Cria uma nova div para cada resultado, formatando-a como HTML
      resultados += `<div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}
          <a href="${dado.link}" target="_blank">Mais Informaçoes</a>
        </p>
      </div>`;
      }
    }
    
    if (!resultados) {
      resultados = "<p>Nada foi encontrado</p>";
    }

    //  Exibe o resultado
    section.innerHTML = resultados;
}