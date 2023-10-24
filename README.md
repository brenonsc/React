# React :atom_symbol:

Este repositório armazena meus estudos em React, uma das bibliotecas JavaScript mais populares para criar interfaces de usuário interativas, utilizando-se de TypeScript. Aqui, você encontrará diversos projetos e exemplos que cobrem conceitos fundamentais do React.

<br>

## Props

**Props** (ou propriedades) são uma das características essenciais do React. Eles são usados para passar dados de um componente pai para um componente filho. Isso é fundamental para a criação de componentes reutilizáveis e dinâmicos. No meu repositório, você encontrará exemplos práticos de como usar Props para transmitir informações entre componentes de forma eficaz.

Exemplo de uso de Props:

```javascript
// Componente pai
function App() {
  return (
    <Pessoa nome={"João"} />
  );
}

// Componente filho
interface PessoaProps{
    nome: string
}

function Pessoa({nome}: PessoaProps) {
  <h1>Olá { nome }!</h1>
}
```

<br>

## Hooks

**Hooks** são funções especiais fornecidas pelo React que permitem que você "enganche" funcionalidades do React em componentes funcionais. Os Hooks oferecem um meio mais poderoso e flexível de lidar com o estado, ciclo de vida e outros recursos do React em componentes funcionais.

Dentro deste repositório, você encontrará exemplos práticos de como usar Hooks, como o `useState`, `useEffect` e outros, para gerenciar o estado do componente, fazer chamadas à API e manipular outros aspectos de componentes funcionais.

Exemplo de uso do `useState`:

```javascript
import React, { useState } from 'react';

function Contador() {
  const [contador, setContador] = useState(0);

  const incrementar = () => {
    setContador(contador + 1);
  };

  return (
    <div>
      <p>Contagem: {contador}</p>
      <button onClick={incrementar}>Incrementar</button>
    </div>
  );
}
```

<br>

Este repositório servirá como um recurso valioso para quem deseja aprender ou aprimorar suas habilidades em React. Sinta-se à vontade para explorar os projetos, clonar o repositório e experimentar os exemplos. Se você tiver alguma dúvida ou sugestão, não hesite em entrar em contato. Boas codificações!