# Projeto Teste para Desenvolvedor(a) Front-End Next.js

## Descrição

Este projeto é um ecommerce desenvolvido utilizando Next.js, com a integração de funcionalidades como exibição de produtos, carrinho de compras, e gerenciamento de estado com Redux. A aplicação foi configurada com Docker para facilitar o desenvolvimento e a execução do ambiente de forma isolada.

## Funcionalidades Implementadas

- **Página de Produtos**: Exibição dos produtos disponíveis com detalhes, preços e imagens.
- **Carrinho de Compras**: Permite adicionar produtos ao carrinho, visualizar o resumo do carrinho e remover itens.
- **Cart Summary**: Exibe a quantidade total de itens no carrinho e o preço total.
- **Interação com API**: Consome dados de produtos e informações relacionadas via hooks.
- **Gerenciamento de Estado**: Utiliza Redux (via `cartSlice.ts`) para gerenciar o estado do carrinho de compras.
- **Docker**: Configuração de ambiente de desenvolvimento utilizando Docker e Docker Compose, permitindo executar a aplicação com um único comando.

## Tecnologias Utilizadas

- **Next.js**: Framework React para construção de interfaces dinâmicas com renderização do lado do servidor.
- **React**: Biblioteca para construção de interfaces de usuário.
- **Redux**: Biblioteca para gerenciamento de estado (usada com `cartSlice.ts`).
- **Docker**: Containerização da aplicação para facilitar o ambiente de desenvolvimento.
- **TypeScript**: Utilizado para garantir um desenvolvimento mais robusto e evitar erros durante a execução.
- **CSS Modules**: Usado para escopo de estilo isolado e modular.
- **React Hooks**: Utilizados para gerenciar estado e efeitos colaterais na aplicação.

## Como Configurar e Executar a Aplicação

### 1. Clonando o Repositório

Clone este repositório em seu ambiente local:

```bash
git clone https://github.com/Roow14/marketplace-NFTs.git
cd teste
2. Instalando as Dependências
Instale as dependências necessárias utilizando o NPM ou Yarn:


npm install
# ou
yarn install
3. Executando a Aplicação com Docker
Se você deseja rodar a aplicação utilizando Docker, basta executar:


docker-compose up --build
Isso irá configurar e iniciar a aplicação automaticamente.

4. Executando Localmente
Se preferir rodar a aplicação localmente sem Docker, utilize o comando:


npm run dev
# ou
yarn dev
Isso irá iniciar o servidor local em http://localhost:3000.

Estrutura de Diretórios
A estrutura de arquivos do projeto é a seguinte:


> .next                    # Arquivos gerados pelo Next.js
> img                       # Imagens utilizadas no projeto
> node_modules              # Dependências do projeto
public
> img                       # Imagens públicas
file.svg                    # Ícones SVG
src
> app
  ✓ components              # Componentes reutilizáveis
  Cart.tsx                  # Componente do carrinho de compras
  CartSummary.tsx           # Componente de resumo do carrinho
  NFTCard.tsx               # Cartão de exibição de NFTs
  ProductCard.tsx           # Cartão de exibição de produtos
  pages
    index.tsx               # Página principal
    layout.tsx              # Layout principal da aplicação
    nft[id].tsx             # Página dinâmica para detalhes de NFT
    sacola.tsx               # Página do carrinho de compras
> store
  cartSlice.ts              # Redux slice para o carrinho de compras
  store.ts                  # Configuração do Redux
> styles
  Cart.css                  # Estilos específicos para o carrinho
  globals.css               # Estilos globais
  Home.module.css           # Estilos para a página inicial
Considerações Finais
Limitações: O projeto ainda não possui funcionalidade de checkout completo, com integração de pagamento.

Melhorias Futuras:

Implementação de autenticação de usuário.

Conexão com uma API real de produtos.

Sistema de avaliação de produtos.

Histórico de Commits
Certifique-se de que os commits reflitam o progresso do desenvolvimento, com mensagens claras e objetivas, como por exemplo:

"Adicionando estrutura inicial do projeto"

"Configurando Redux para o carrinho de compras"

"Implementando componentes de carrinho e resumo"

"Adicionando Docker e Docker Compose para orquestração"

Contribuições
Se desejar contribuir para o projeto, fique à vontade para enviar pull requests. Caso encontre algum problema ou tenha sugestões de melhorias, abra uma issue.

Licença
Este projeto é licenciado sob a MIT License.



Esse README contém instruções claras de como configurar, rodar o projeto, uma descrição das funcionalidades, tecnologias utilizadas, e outras informações úteis sobre o andamento do desenvolvimento.
