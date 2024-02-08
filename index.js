const perguntas = [
    {
      pergunta: "O que é JavaScript?",
      respostas: [
        "Uma linguagem de programação para estilização de páginas web",
        "Um framework para desenvolvimento de aplicativos móveis",
        "Uma linguagem de programação utilizada principalmente para desenvolvimento web",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a função do operador '===' em JavaScript?",
      respostas: [
        "Comparação de igualdade estrita (valor e tipo)",
        "Atribuição de valores",
        "Comparação de igualdade solta (apenas valor)",
      ],
      correta: 0
    },
    {
      pergunta: "O que é uma função em JavaScript?",
      respostas: [
        "Um valor numérico",
        "Um conjunto de instruções que realiza uma tarefa ou calcula um valor",
        "Um operador de comparação",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o método utilizado para adicionar um elemento ao final de um array em JavaScript?",
      respostas: [
        "push()",
        "concat()",
        "pop()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o DOM (Document Object Model) em JavaScript?",
      respostas: [
        "Uma linguagem de marcação para criar estrutura em páginas web",
        "Um modelo que representa a estrutura hierárquica de elementos HTML/XML como objetos",
        "Um método para manipular arquivos de texto",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o símbolo utilizado para fazer comentários de uma linha em JavaScript?",
      respostas: [
        "//",
        "/* */",
        "#",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a função do método 'querySelector()' em JavaScript?",
      respostas: [
        "Selecionar um elemento pelo seu ID",
        "Selecionar um elemento pelo seu nome",
        "Selecionar um elemento pelo seu seletor CSS",
      ],
      correta: 2
    },
    {
      pergunta: "O que é uma variável em JavaScript?",
      respostas: [
        "Um elemento gráfico em uma página web",
        "Um valor constante",
        "Um contêiner para armazenar dados que podem ser alterados durante a execução do programa",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o método utilizado para converter uma string em um número inteiro em JavaScript?",
      respostas: [
        "parseInt()",
        "parseFloat()",
        "toFixed()",
      ],
      correta: 0
    },
    {
      pergunta: "O que é o evento 'click' em JavaScript?",
      respostas: [
        "Um evento relacionado à rolagem da página",
        "Um evento disparado quando um elemento é clicado",
        "Um evento relacionado à entrada de dados em um campo de texto",
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
      
      quizItem.querySelector('dl').appendChild(dt)
    }
  
    quizItem.querySelector('dl dt').remove()
    
    
    quiz.appendChild(quizItem)
  }