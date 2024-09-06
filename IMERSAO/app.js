// Função para pesquisar e exibir os resultados na página
function pesquisar() {
    // Obtém a seção HTML onde os resultados serão inseridos
    let section = document.getElementById('resultados-pesquisa');
  
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
  
    // Itera sobre cada dado na lista de resultados
    for (let dado of dados) {
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
  
    // Insere o HTML gerado na seção de resultados
    section.innerHTML = resultados;
  }