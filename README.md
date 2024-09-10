## Este projeto foi construido durante as aulas de Introdução ao CSS in JS com React da <a src="https://ebaconline.com.br/full-stack-java">EBAC<>

Desenvolvido por <a src="https://www.instagram.com/vivianezzt/">Viviane Silva</a>

# Projeto Portfólio

Passo a Passo

Iniciando o projeto

```jsx
npx create-react-app portfolio --template typescript
```

Configurar .editorconfig (padronização do navegador) - com a solução acaompanhando a aula

```jsx
root = true

[*]

indent_style = space
indent_size = 2
end_of_line = lf
charset = utf-8
trim_trailing_whitespace = true
insert_final_newline = true
```

Adicionar as versões (solução) eslint

```jsx
npm install @typescript-eslint/eslint-plugin@^5.50.0 @typescript-eslint/parser@^5.50.0 eslint@^8.33.0 eslint-config-prettier@^8.6.0 eslint-plugin-prettier@^4.2.1 eslint-plugin-react@^7.32.2 eslint-plugin-react-hooks@^4.6.0 prettier@2.8.3
```

Eslint (solução)

```jsx
npm init @eslint/config@0.4.6

```

<aside>


💡 Atenção: Este comando pedirá para você instalar as dependências novamente. Selecione a opção de não instalar, pois, caso contrário, serão baixadas as versões mais recentes das dependências, o que pode causar incompatibilidades entre as versões.)

</aside>

No arquivo eslintrc.json editar (escrever codigos com qualidade e resolver bugs)

```jsx
"plugins": [
"@typescript-eslint",
"react",
"react-hooks"
],
"rules": {
"react-hooks/rules-of-hooks": "error",
"react-hooks/exhaustive-deps": "warn",
"react/propTypes": "off",
"react/react-in-jsx-scope": "off",
"@typescript-eslint/explict-module-types": "off"
},
"settings": {
"react": {
"version": "detect"
}
}
```

Instalar e configurar o prettier (extensões já instaladas)

Criar um arquivo .prettierrc e add a config

```jsx
{
"trailingComma": "none",
"semi": false,
"singleQuote": true
}
```

No arquivo eslintrc.json add em extends

```jsx
"extends": [
"eslint:recommended",
"plugin:react/recommended",
"plugin:@typescript-eslint/recommended",
"plugin:prettier/recommended"
],
```

Criar uma pasta chamada .vscode e um arquivo settings.json e add as informações

```jsx
{
"editor.formatOnSave": false,
"editor.codeActionsOnSave": {
"source.fixAll.eslint": true
}
}
```

finalizando

```jsx
npx prettier --write ./src/
```

Aula 3 - instalar o styled componentes

```jsx
npm install --save styled-components
```

```jsx
import styled from 'styled-components'
```

```jsx
npm install --save-dev @types/styled-components

In the project directory, you can run:

### `npm start`

