/**
 * ==========================================================================
 * script.js
 * --------------------------------------------------------------------------
 * Contém todas as funções JavaScript para a interatividade do Guia Fields of Mistria.
 *
 * Seções:
 * 1. LÓGICA DE NAVEGAÇÃO E UI (Abas, Scroll, Spoilers, Painel de Notícias)
 * 2. LÓGICA DE DADOS E ESTADO (Checkboxes de Doação)
 * 3. LÓGICA ESPECÍFICA DE PÁGINAS (Ex: Flora)
 * 4. EXECUÇÃO NO CARREGAMENTO DA PÁGINA
 * ==========================================================================
 */

/* ==========================================================================
   1. LÓGICA DE NAVEGAÇÃO E UI
   ========================================================================== */

/**
 * Controla a exibição do conteúdo das abas.
 * @param {string} idConteudo - O ID do elemento de conteúdo da aba a ser exibido.
 * @param {HTMLElement} elementoBotao - O elemento do botão da aba que foi clicado.
 */
function mostrarConteudo(idConteudo, elementoBotao) {
    let containerDeTabs = elementoBotao.closest('main') || document.body;
    containerDeTabs.querySelectorAll('.tab-content').forEach(div => {
        div.classList.remove('active');
    });

    let barraDeAbas = elementoBotao.closest('.tabs');
    if (barraDeAbas) {
        barraDeAbas.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
    }

    const conteudoAlvo = document.getElementById(idConteudo);
    if (conteudoAlvo) {
        conteudoAlvo.classList.add('active');
    }
    elementoBotao.classList.add('active');
}

/**
 * Navega para um card de personagem específico dentro de uma aba e rola até ele.
 * @param {string} personagemId - O ID do elemento do card do personagem.
 * @param {string} abaId - O ID do elemento de conteúdo da aba onde o personagem está.
 */
function irParaPersonagem(personagemId, abaId) {
    const todosOsBotoesDeAba = document.querySelectorAll('.tabs .tab-button');
    let botaoAlvo = null;
    todosOsBotoesDeAba.forEach(button => {
        if (button.getAttribute('onclick') && button.getAttribute('onclick').includes(`mostrarConteudo('${abaId}'`)) {
            botaoAlvo = button;
        }
    });

    if (botaoAlvo) {
        mostrarConteudo(abaId, botaoAlvo);
    } else {
        console.error('Botão da aba não encontrado para o ID:', abaId);
        return;
    }

    setTimeout(() => {
        const elementoPersonagem = document.getElementById(personagemId);
        if (elementoPersonagem) {
            elementoPersonagem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            elementoPersonagem.classList.add('highlighted-character');
            setTimeout(() => {
                elementoPersonagem.classList.remove('highlighted-character');
            }, 2500);
        } else {
            console.error('Elemento do personagem não encontrado com o ID:', personagemId);
        }
    }, 150);
}

/**
 * Revela um personagem spoiler na miniatura ou navega para ele se já revelado.
 * @param {HTMLElement} element - O elemento da miniatura do personagem que foi clicado.
 */
function revelarSpoiler(element) {
    const isRevealed = element.dataset.revealed === "true";

    if (!isRevealed) {
        const portraitSrc = element.dataset.portraitSrc;
        const iconSrc = element.dataset.iconSrc;
        const charName = element.dataset.name;
        const portraitImg = element.querySelector('.miniature-portrait');
        const nameArea = element.querySelector('.miniature-name-area');
        const nameSpan = nameArea.querySelector('.miniature-name');
        const iconImg = nameArea.querySelector('.miniature-name-icon');

        if (portraitImg) {
            portraitImg.classList.remove('blurred');
            portraitImg.alt = 'Retrato de ' + charName;
        }
        if (nameSpan) {
            nameSpan.textContent = charName;
            nameSpan.classList.remove('spoiler-text');
        }
        if (iconImg) {
            iconImg.src = iconSrc;
            iconImg.alt = '';
            iconImg.classList.remove('is-spoiler-icon');
        }
        element.dataset.revealed = "true";
    } else {
        const charId = element.dataset.charId;
        const tabId = element.dataset.tabId;
        irParaPersonagem(charId, tabId);
    }
}

/**
 * Revela uma localização com efeito de spoiler.
 * @param {HTMLElement} element - O elemento da localização que foi clicado.
 */
function revelarLocalizacao(element) {
    element.classList.remove('blurred');
}

/**
 * Abre ou fecha o painel de notícias.
 */
function toggleNewsPanel() {
    const overlay = document.getElementById('news-panel-overlay');
    const iframe = overlay.querySelector('iframe');
    const isActive = overlay.classList.contains('active');

    if (isActive) {
        overlay.classList.remove('active');
    } else {
        // Adiciona um timestamp para evitar o cache do iframe e sempre carregar a última versão
        iframe.src = `news.html?t=${new Date().getTime()}`;
        overlay.classList.add('active');
    }
}


/* ==========================================================================
   2. LÓGICA DE DADOS E ESTADO
   ========================================================================== */

/**
 * Gerencia o estado de doação dos itens (checkboxes).
 * - Aplica fundo vermelho (pendente) ou verde (doado).
 * - Salva o estado no localStorage para persistir os dados.
 */
function inicializarStatusDoacao() {
    const allCheckboxes = document.querySelectorAll('.item-donate input[type="checkbox"]');
    const storagePrefix = 'donated_';

    function applyDonationStatusStyle(checkbox) {
        const parentItem = checkbox.closest('tr, .list-item-entry');
        if (!parentItem) return;

        if (checkbox.checked) {
            parentItem.classList.add('donated-item');
            parentItem.classList.remove('not-donated-item');
        } else {
            parentItem.classList.add('not-donated-item');
            parentItem.classList.remove('donated-item');
        }
    }

    allCheckboxes.forEach(checkbox => {
        const storedValue = localStorage.getItem(storagePrefix + checkbox.name);
        checkbox.checked = storedValue === 'true';
        applyDonationStatusStyle(checkbox); // Aplica o estilo inicial

        checkbox.addEventListener('change', function() {
            localStorage.setItem(storagePrefix + this.name, this.checked);
            applyDonationStatusStyle(this); // Atualiza o estilo na mudança
        });
    });
}


/* ==========================================================================
   3. LÓGICA ESPECÍFICA DE PÁGINAS
   ========================================================================== */

/**
 * Popula a aba "All Seasons" na página museu_flora.html, agregando
 * os itens das outras abas de estação.
 */
function popularFloraTodasEstacoes() {
    const abasEstacoesIds = ['flora_spring', 'flora_summer', 'flora_fall', 'flora_winter'];
    const agregadosDestino = {
        Crop: document.querySelector('#all_seasons_crop .item-list'),
        Flower: document.querySelector('#all_seasons_flower .item-list'),
        Forageable: document.querySelector('#all_seasons_forageable .item-list')
    };

    // Só executa se estiver na página de flora e os elementos existirem
    if (!agregadosDestino.Crop || !agregadosDestino.Flower || !agregadosDestino.Forageable) {
        return;
    }

    // Limpa as listas agregadas antes de popular
    for (const key in agregadosDestino) {
        agregadosDestino[key].innerHTML = '';
    }

    // Itera sobre cada aba de estação
    abasEstacoesIds.forEach(idAba => {
        const abaConteudo = document.getElementById(idAba);
        if (abaConteudo) {
            const cardsSubcategoria = abaConteudo.querySelectorAll('.item-subcategory-card');
            cardsSubcategoria.forEach(card => {
                const listaItensOriginal = card.querySelector('.item-list');
                if (listaItensOriginal) {
                    const tipoCategoria = listaItensOriginal.dataset.category; // Crop, Flower, Forageable
                    if (tipoCategoria && agregadosDestino[tipoCategoria]) {
                        const itens = listaItensOriginal.querySelectorAll('.list-item-entry');
                        itens.forEach(item => {
                            const itemClonado = item.cloneNode(true);
                            agregadosDestino[tipoCategoria].appendChild(itemClonado);
                        });
                    }
                }
            });
        }
    });
}


/* ==========================================================================
   4. EXECUÇÃO NO CARREGAMENTO DA PÁGINA
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {

    // --- Inicialização do sistema de abas ---
    const todosOsConjuntosDeTabs = document.querySelectorAll('.tabs');
    todosOsConjuntosDeTabs.forEach(tabContainer => {
        let abaAtivaNoHtml = tabContainer.querySelector('.tab-button.active');
        if (abaAtivaNoHtml) {
            // Se uma aba já está marcada como ativa no HTML, garante que seu conteúdo também esteja
            const onclickAttr = abaAtivaNoHtml.getAttribute('onclick');
            if(onclickAttr) {
                const idConteudoAtivo = onclickAttr.match(/'([^']+)'/)[1];
                const elementoConteudoAtivo = document.getElementById(idConteudoAtivo);
                if (elementoConteudoAtivo) {
                    elementoConteudoAtivo.classList.add('active');
                }
            }
        } else {
            // Se nenhuma aba estiver ativa, ativa a primeira por padrão
            const primeiroBotao = tabContainer.querySelector('.tab-button');
            if (primeiroBotao) {
                const onclickAttr = primeiroBotao.getAttribute('onclick');
                if (onclickAttr) {
                    const match = onclickAttr.match(/'([^']+)'/);
                    if (match && match[1]) {
                        const primeiroConteudoId = match[1];
                        mostrarConteudo(primeiroConteudoId, primeiroBotao);
                    }
                }
            }
        }
    });

    // --- Inicialização do sistema de status de doação (vermelho/verde) ---
    inicializarStatusDoacao();
    
    // --- Lógica específica para a página de Flora ---
    popularFloraTodasEstacoes();

    // --- Fechar painel de notícias ao clicar fora (no overlay) ---
    const overlay = document.getElementById('news-panel-overlay');
    if (overlay) {
        overlay.addEventListener('click', function(event) {
            if (event.target === overlay) {
                toggleNewsPanel();
            }
        });
    }
});

/* ==========================================================================
   5. Todas as estacoes
   ========================================================================== */

function carregarConteudoEstacoes() {
  const estacoes = ['spring', 'summer', 'fall', 'winter'];
  const secoes = {
    flora: { titulo: 'Flora', campos: ['Crop', 'Flower', 'Forageable'] },
    insetos: { titulo: 'Insects', tabela: 'insects' },
    peixes: { titulo: 'Fish', tabela: 'fish' },
  };

  estacoes.forEach(estacao => {
    const container = document.getElementById(`season_${estacao}`);
    if (!container) return;

    container.innerHTML = ''; // Limpa antes de adicionar

    // Flora
    const floraSection = document.createElement('section');
    floraSection.innerHTML = `<h2>🌿 Flora (${capitalize(estacao)})</h2>`;
    secoes.flora.campos.forEach(tipo => {
      const itens = database.flora.filter(item => item.season?.includes(estacao) && item.type === tipo);
      if (itens.length > 0) {
        const card = criarListaItens(tipo, itens);
        floraSection.appendChild(card);
      }
    });
    container.appendChild(floraSection);

    // Insetos
    const insetos = database.insects.filter(item => item.season?.includes(estacao));
    if (insetos.length > 0) {
      const insetosSection = document.createElement('section');
      insetosSection.innerHTML = `<h2>🐞 Insects (${capitalize(estacao)})</h2>`;
      insetosSection.appendChild(criarTabelaInsects(insetos));
      container.appendChild(insetosSection);
    }

    // Peixes
    const peixes = database.fish.filter(item => item.season?.includes(estacao));
    if (peixes.length > 0) {
      const peixesSection = document.createElement('section');
      peixesSection.innerHTML = `<h2>🐟 Fish (${capitalize(estacao)})</h2>`;
      peixesSection.appendChild(criarTabelaPeixes(peixes));
      container.appendChild(peixesSection);
    }
  });
}

function criarListaItens(tipo, itens) {
  const card = document.createElement('div');
  card.className = 'item-subcategory-card';
  card.innerHTML = `<h4>${tipo}s</h4>`;
  const ul = document.createElement('ul');
  ul.className = 'item-list';

  itens.forEach(item => {
    const li = document.createElement('li');
    li.className = 'list-item-entry';
    li.innerHTML = `
      <img src="${item.icon}" alt="${item.name}" class="item-icon" />
      <div class="item-details">
        <span class="item-name">${item.name}</span>
        ${item.location ? `<span class="item-location">${item.location}</span>` : ''}
        ${item.seedPrice ? `<span class="item-seed-price">${item.seedPrice}</span>` : ''}
      </div>
      <div class="item-donate">
        <label><input type="checkbox" name="donated_${item.name}_${item.season}" /> Delivered</label>
      </div>`;
    ul.appendChild(li);
  });

  card.appendChild(ul);
  return card;
}

function criarTabelaInsects(insetos) {
  const tabela = document.createElement('table');
  tabela.className = 'insect-table';
  tabela.innerHTML = `
    <thead>
      <tr>
        <th>Photo</th><th>Name</th><th>Location</th><th>Time</th><th>Weather</th><th>Rarity</th><th>Donated</th>
      </tr>
    </thead>
    <tbody>
      ${insetos.map(item => `
        <tr>
          <td><img src="${item.icon}" alt="${item.name}" class="item-icon" /></td>
          <td>${item.name}</td>
          <td>${item.location}</td>
          <td>${item.time}</td>
          <td>${item.weather}</td>
          <td>${item.rarity}</td>
          <td><label><input type="checkbox" name="donated_${item.name}" /> Donated</label></td>
        </tr>
      `).join('')}
    </tbody>`;
  return tabela;
}

function criarTabelaPeixes(peixes) {
  const tabela = document.createElement('table');
  tabela.className = 'fish-table';
  tabela.innerHTML = `
    <thead>
      <tr>
        <th>Photo</th><th>Name</th><th>Location</th><th>Weather</th><th>Rarity</th><th>Size</th><th>Donated</th>
      </tr>
    </thead>
    <tbody>
      ${peixes.map(item => `
        <tr>
          <td><img src="${item.icon}" alt="${item.name}" class="item-icon" /></td>
          <td>${item.name}</td>
          <td>${item.location}</td>
          <td>${item.weather}</td>
          <td>${item.rarity}</td>
          <td>${item.size}</td>
          <td><label><input type="checkbox" name="donated_${item.name}" /> Donated</label></td>
        </tr>
      `).join('')}
    </tbody>`;
  return tabela;
}

function capitalize(palavra) {
  return palavra.charAt(0).toUpperCase() + palavra.slice(1);
}
