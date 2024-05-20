# Hooks no React
- [Principais Hooks](#principais-hooks)
  - [useState](#usestate)
  - [useEffect](#useeffect)
  - [useContext](#useeffect)
  - [useRef](#useeffect)
  - [useReducer](#useeffect)
- [Conclusão](#conclusão)


Os Hooks são funções que permitem usar estado e outras funcionalidades do React em componentes funcionais.

## Principais Hooks
### useState
**O que faz**: Adiciona estado a um componente funcional.
**Como usar**:
```jsx
import React, { useState } from 'react';

function Contador() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </div>
  );
}
```

### useEffect
**O que faz**: Permite executar efeitos colaterais (ex.: fetch de dados, assinaturas) em componentes funcionais.
**Como usar**:

```jsx
import React, { useState, useEffect } from 'react';

function Relogio() {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval); // Cleanup
  }, []); // Executa apenas uma vez

  return <div>Hora atual: {time}</div>;
}
```

### useContext
O que faz: Consome valores de um contexto em componentes funcionais.
Como usar:
```jsx
import React, { useContext } from 'react';

const TemaContext = React.createContext('claro');

function ExibirTema() {
  const tema = useContext(TemaContext);

  return <div>O tema atual é {tema}</div>;
}
```
### useReducer
O que faz: Gerencia o estado de um componente através de uma função reducer, útil para estados complexos.
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
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
}
```

### useRef
O que faz: Cria uma referência mutável que persiste durante o ciclo de vida do componente, útil para acessar elementos DOM diretamente.
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
## Conclusão
- useState: Para gerenciar estado local.
- useEffect: Para efeitos colaterais como fetch de dados.
- useContext: Para consumir valores de contexto.
- useReducer: Para estados mais complexos e lógica de redução.
- useRef: Para acessar diretamente elementos DOM.