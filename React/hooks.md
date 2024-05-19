# React Hooks

Os Hooks são uma funcionalidade do React introduzida na versão 16.8 que permitem o uso de estado e outros recursos do React em componentes funcionais, sem a necessidade de escrever componentes de classe. Eles oferecem uma maneira mais simples e direta de lidar com o estado, ciclos de vida e outras funcionalidades do React.

Por que usar Hooks?
Simplicidade: Simplificam a criação e a manutenção de componentes ao evitar a complexidade das classes.
Reutilização de Lógica: Permitem a reutilização de lógica de estado e efeitos colaterais entre componentes usando funções customizadas (custom hooks).
Legibilidade: Tornam os componentes mais fáceis de ler e entender, com uma estrutura mais clara e concisa.

## Principais Hooks
### useState
**O que faz:** Permite adicionar estado a um componente funcional.

Como usar:
```jsx
import React, { useState } from 'react';

function Contador() {
  // Declara uma variável de estado chamada "count" e uma função "setCount" para atualizá-la.
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>
        Clique aqui
      </button>
    </div>
  );
}
```
### useEffect
**O que faz:** Permite executar efeitos colaterais em componentes funcionais, como chamadas de API, assinaturas, ou manipulações de DOM.

Como usar:

```jsx
import React, { useState, useEffect } from 'react';

function Relogio() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function para limpar o intervalo
    return () => clearInterval(interval);
  }, []); // Array vazio significa que o efeito só executa uma vez após o primeiro render.

  return (
    <div>
      <p>Hora atual: {time}</p>
    </div>
  );
}
```
### useContext
**O que faz:** Permite consumir valores de um contexto em componentes funcionais.

Como usar:

```jsx
import React, { useContext } from 'react';

const TemaContext = React.createContext('claro');

function ExibirTema() {
  const tema = useContext(TemaContext);

  return (
    <div>
      <p>O tema atual é {tema}</p>
    </div>
  );
}
```
### useReducer
**O que faz:** Gerencia o estado de um componente através de uma função de redução (reducer), útil para estados complexos.

Como usar:

```jsx
import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Contador() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Contagem: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        Incrementar
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        Decrementar
      </button>
    </div>
  );
}
```
### useRef
**O que faz:** Cria uma referência mutável que persiste durante o ciclo de vida do componente, útil para acessar elementos DOM diretamente.

Como usar:

```jsx
import React, { useRef } from 'react';

function TextoFocus() {
  const inputEl = useRef(null);

  const focarInput = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={focarInput}>Focar no Input</button>
    </div>
  );
}
```
