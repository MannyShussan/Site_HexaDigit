# 🚀 Configuração Manual de um Projeto React 18 com Vite, TypeScript e SCSS

Este guia descreve passo a passo como criar um projeto **React 18** do zero, utilizando **Vite** e **TypeScript**, além da configuração do **SCSS**.

---

## 📌 **1. Criar a Estrutura do Projeto**

Abra o terminal e crie a pasta do projeto:

```sh
mkdir meu-projeto-react
cd meu-projeto-react
```
## 📌 **2. Inicializar o Vite com TypeScript**
Execute o seguinte comando para configurar o Vite com TypeScript:

```sh
npm create vite@latest . -- --template react-ts
```

## 📌 **3. Instalar as Dependências**

Agora, instale as dependências principais:

```sh
npm install react@18 react-dom@18
```

E as dependências de desenvolvimento:

```sh
npm install -D typescript vite @types/react @types/react-dom
```

Instale também o SASS para suportar SCSS:

```sh
npm install -D sass
```
 
4. Estrutura do Projeto
Após instalar tudo, a estrutura do projeto ficará assim:

```sh
meu-projeto-react
│── node_modules/
│── public/
│── src/
│   ├── assets/
│   ├── components/
│   ├── styles/
│   │   ├── global.scss
│   │   ├── variables.scss
│   ├── App.tsx
│   ├── main.tsx
│── .gitignore
│── index.html
│── package.json
│── tsconfig.json
│── vite.config.ts
```

## 📌 **5. Configuração do SCSS**
Crie a pasta src/styles/ e adicione os arquivos abaixo:

📄 `src/styles/variables.scss`

```scss
$primary-color: #3498db;
$secondary-color: #2ecc71;
$font-stack: 'Arial', sans-serif;
```

📄 `src/styles/global.scss`

```scss
@import "./variables";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-stack;
}

body {
  background-color: $primary-color;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
```

Agora, importe o `global.scss` no `App.tsx`:
📄 `src/App.tsx`

```tsx
import "./styles/global.scss";

function App() {
  return (
    <div>
      <h1>Olá, React 18 com Vite e TypeScript! 🚀</h1>
    </div>
  );
}

export default App;
```

## 📌 **6. Configuração do TypeScript (tsconfig.json)**

O arquivo `tsconfig.json` é gerado automaticamente pelo Vite, mas podemos ajustá-lo:
📄 `tsconfig.json` 

```json
{
  "compilerOptions": {
    "target": "ESNext",
    "useDefineForClassFields": true,
    "lib": ["DOM", "DOM.Iterable", "ESNext"],
    "module": "ESNext",
    "resolveJsonModule": true,
    "strict": true,
    "moduleResolution": "Node",
    "skipLibCheck": true,
    "allowSyntheticDefaultImports": true,
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "jsx": "react-jsx"
  },
  "include": ["src"]
}
```

## 📌 **7. Configuração do Vite (vite.config.ts)**
Abra o arquivo vite.config.ts e edite-o para garantir que tudo está correto:

📄 `vite.config.ts`

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  }
});
```

## 📌 **8. Executar o Projeto**

📍 Certifique-se de estar na pasta do projeto
Se ainda não estiver na pasta do projeto, entre nela:

```bash
cd meu-projeto-react
```

📍 Instale as dependências
Caso ainda não tenha feito isso:

```sh
npm i
```

📍 Inicie o servidor de desenvolvimento
Agora, execute o comando abaixo para rodar o projeto:

```sh
npm run dev
```

Isso iniciará o projeto e abrirá o navegador em [LocalHost](http://localhost:5173) na porta `5173`.

🎉 Conclusão
Agora você tem um projeto React 18 com Vite, TypeScript e SCSS totalmente configurado manualmente! 🚀🔥

Se precisar adicionar mais configurações ou bibliotecas, sinta-se à vontade para modificar conforme necessário.

Bom desenvolvimento! 🚀🎨
