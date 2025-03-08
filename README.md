# Jogo da Forca

## Objetivo

O **Jogo da Forca** é uma implementação do clássico jogo de adivinhação de palavras, onde o jogador deve tentar adivinhar a palavra secreta, letra por letra, antes de esgotar suas tentativas. O objetivo do jogo é acertar todas as letras da palavra antes que o boneco da forca seja completamente desenhado.

Este projeto foi desenvolvido como um exercício prático após o estudo da **lógica de programação** na plataforma **Alura**. O jogo é uma aplicação simples em JavaScript, HTML e CSS, com a finalidade de reforçar os conceitos básicos de programação, como manipulação de arrays, eventos, loops e a interação com o DOM.

## Desenvolvimento

Este projeto foi uma ótima oportunidade para aplicar os conceitos aprendidos durante o curso de lógica de programação na Alura. Ele me ajudou a entender como estruturar a interação com o usuário e gerenciar o estado do jogo de forma dinâmica, além de me proporcionar uma base sólida para futuros projetos mais complexos.

## Tecnologias Utilizadas

- **HTML5**
- **CSS3**
- **JavaScript**

## Funcionalidades

- Sorteio de uma palavra com dica associada.
- O jogador pode tentar adivinhar a palavra digitando uma letra.
- Tentativas erradas resultam no desenrolar de uma parte do boneco da forca.
- Fim do jogo ocorre quando o jogador acerta a palavra ou o boneco é completamente desenhado.

## Como Jogar

1. O jogo começa com uma palavra sorteada e uma dica associada.
2. O jogador digita uma letra no campo de entrada e pressiona **Enter**.
3. Se a letra estiver na palavra, ela é revelada na tela.
4. Se a letra não estiver na palavra, o jogador perde uma tentativa e uma parte do boneco é desenhada.
5. O jogo termina quando o jogador adivinha a palavra ou o boneco é desenhado completamente, indicando derrota.

## Como Rodar o Projeto

1. Faça o **clone** deste repositório:

    ```bash
    git clone https://github.com/seu-usuario/jogo-da-forca.git
    ```

2. Abra o arquivo `index.html` em seu navegador para começar a jogar.

## Estrutura de Pastas

```plaintext
jogo-da-forca/
├── index.html            # Página principal do jogo
├── assets/               # Pasta para armazenar os recursos estáticos
│   ├── js/               # Scripts JavaScript
│   │   └── main.js       # Lógica do jogo
│   └── css/              # Estilos do jogo
│       └── style.css     # Estilo do jogo
└── README.md             # Documentação do projeto

## Agradecimentos

Agradeço à Alura pelo excelente curso de Lógica de Programação e pela oportunidade de aprender conceitos fundamentais que foram aplicados diretamente neste projeto.