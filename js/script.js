/**
 * script.js
 * * Contém as funções JavaScript para a interatividade do Guia Fields of Mistria,
 * incluindo navegação por abas e links diretos para personagens.
 */

/**
 * Controla a exibição do conteúdo das abas.
 * @param {string} idConteudo - O ID do elemento de conteúdo da aba a ser exibido.
 * @param {HTMLElement} elementoBotao - O elemento do botão da aba que foi clicado.
 */
function mostrarConteudo(idConteudo, elementoBotao) {
    // Encontra o container principal das abas e seus conteúdos (geralmente o <main>)
    let containerDeTabs = elementoBotao.closest('main');
    if (!containerDeTabs) {
        // Fallback se não estiver dentro de um <main>, procura pelo pai mais próximo que contenha .tabs e .tab-content
        // Esta lógica pode precisar de ajuste dependendo da sua estrutura HTML final se não usar <main>
        let currentElement = elementoBotao;
        while (currentElement.parentElement) {
            containerDeTabs = currentElement.parentElement;
            if (containerDeTabs.querySelector('.tabs') && containerDeTabs.querySelector('.tab-content')) {
                break;
            }
            currentElement = containerDeTabs;
        }
    }
    
    // Esconde todos os outros conteúdos de abas dentro do mesmo container
    if (containerDeTabs) {
        containerDeTabs.querySelectorAll('.tab-content').forEach(div => {
            div.classList.remove('active');
        });
    }

    // Remove a classe 'active' de todos os botões na mesma barra de abas
    let paiDoBotao = elementoBotao.closest('.tabs');
    if (paiDoBotao) {
        paiDoBotao.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
        });
    }

    // Mostra o conteúdo da aba clicada e marca o botão como ativo
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
    // 1. Encontrar o botão da aba correspondente e ativar a aba
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

    // 2. Scroll para o personagem após a aba ser exibida
    // Usar um pequeno timeout para garantir que a transição da aba e a renderização do conteúdo ocorram.
    setTimeout(() => {
        const elementoPersonagem = document.getElementById(personagemId);
        if (elementoPersonagem) {
            elementoPersonagem.scrollIntoView({ behavior: 'smooth', block: 'center' });
            
            // Opcional: Adicionar um destaque temporário
            elementoPersonagem.classList.add('highlighted-character');
            setTimeout(() => {
                elementoPersonagem.classList.remove('highlighted-character');
            }, 2500); // Remove o destaque após 2.5 segundos
        } else {
            console.error('Elemento do personagem não encontrado com o ID:', personagemId);
        }
    }, 150); // Timeout para permitir a renderização da aba
}

// Event Listener para garantir que a primeira aba (ou a marcada como 'active' no HTML)
// esteja ativa ao carregar a página.
document.addEventListener('DOMContentLoaded', () => {
    const todosOsConjuntosDeTabs = document.querySelectorAll('.tabs');
    
    todosOsConjuntosDeTabs.forEach(tabContainer => {
        let abaAtivaNoHtml = tabContainer.querySelector('.tab-button.active');
        
        if (abaAtivaNoHtml) {
            // Se uma aba já está marcada como ativa no HTML, apenas garante que seu conteúdo também esteja ativo.
            // A função mostrarConteudo já lida com isso se chamada, mas aqui garantimos o estado inicial.
            const idConteudoAtivo = abaAtivaNoHtml.getAttribute('onclick').match(/'([^']+)'/)[1];
            const elementoConteudoAtivo = document.getElementById(idConteudoAtivo);
            if (elementoConteudoAtivo) {
                // Garante que todos os outros estejam inativos e este ativo
                // (A lógica em mostrarConteudo é mais robusta para desativar outros)
                // Para simplificar aqui, apenas ativamos o conteúdo correspondente se o botão já está ativo.
                // A chamada inicial de mostrarConteudo(idConteudoAtivo, abaAtivaNoHtml) poderia ser feita aqui
                // mas para evitar chamadas múltiplas, apenas garantimos a classe no conteúdo.
                let containerDeConteudo = abaAtivaNoHtml.closest('main') || document.body; // Encontra o container
                 if (containerDeConteudo) {
                    containerDeConteudo.querySelectorAll('.tab-content').forEach(div => {
                        div.classList.remove('active');
                    });
                }
                elementoConteudoAtivo.classList.add('active');
            }
        } else {
            // Se nenhuma aba estiver ativa no HTML, ativa a primeira.
            const primeiroBotao = tabContainer.querySelector('.tab-button');
            if (primeiroBotao) {
                const primeiroConteudoId = primeiroBotao.getAttribute('onclick').match(/'([^']+)'/)[1];
                // Chamamos mostrarConteudo para lidar com a ativação correta
                mostrarConteudo(primeiroConteudoId, primeiroBotao);
            }
        }
    });
});