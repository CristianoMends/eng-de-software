# Renderização no React

- [Componentes](#componentes)
  - [Componentes Funcionais](#componentes-funcionais)
  - [Componentes de Classe](#componentes-de-classe)
  - [JSX](#jsx)
  - [Propriedades (Props)](#propriedades-props)
  - [Renderização Condicional](#renderização-condicional)
  - [Listas e Chaves](#listas-e-chaves)
- [Conclusão](#conclusão)

A renderização no React é o processo de atualizar a interface do usuário em resposta a mudanças de estado ou propriedades.

## Componentes
### Componentes Funcionais
Componentes que são funções simples e retornam elementos JSX.

```jsx
import React from 'react';

function Saudacao() {
  return <h1>Olá, mundo!</h1>;
}

export default Saudacao;

```

### Componentes de Classe
Componentes mais antigos que podem manter estado interno e utilizar métodos do ciclo de vida.
```jsx
import React, { Component } from 'react';

class Saudacao extends Component {
  render() {
    return <h1>Olá, mundo!</h1>;
  }
}

export default Saudacao;

```
## JSX
JSX permite escrever HTML dentro do JavaScript.
```jsx
const elemento = <h1>Olá, mundo!</h1>;
```
## Propriedades (Props)
Props são dados passados de um componente pai para um componente filho.

```jsx
function Saudacao({ nome }) {
  return <h1>Olá, {nome}!</h1>;
}

function App() {
  return <Saudacao nome="Maria" />;
}
```

## Renderização Condicional
Renderizar elementos ou componentes com base em uma condição.

```jsx
function Saudacao({ isLoggedIn }) {
  if (isLoggedIn) {
    return <h1>Bem-vindo de volta!</h1>;
  } else {
    return <h1>Por favor, faça login.</h1>;
  }
}
```

## Listas e Chaves
Renderizar listas de elementos e usar uma chave única para cada elemento.
```jsx
function ListaDeItens({ itens }) {
  return (
    <ul>
      {itens.map(item => (
        <li key={item.id}>{item.texto}</li>
      ))}
    </ul>
  );
}
```

## Conclusão
- Componentes: Use componentes funcionais com hooks.
- JSX: Escreva HTML dentro do JavaScript.
- Props: Passe dados entre componentes.
- Renderização Condicional: Renderize com base em condições.
- Listas e Chaves: Renderize listas de elementos.
- Ciclo de Vida: Use useEffect para efeitos colaterais.