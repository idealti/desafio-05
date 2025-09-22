# Desafio 5 - Gerenciador de Tarefas (Todo App)

![meu-gerenciador](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgU-tJ1yN7HO3WTgkGwWdeiN-ogZkEwTmduxtspq50PiaEmAJ2jhPrsWD2I4r897fXmjPYd3w5xX6299pkTBNFhjJ1DN1odpZEqpGDDtsB5RdBlwRFxzTFRjVdQEByOh-pR8xuggEC92lpTB_43Meh09aIMXfcyNQMPc0NHAajPxlCMwEPIEUJqfCRL1kk/s1084/meu-gerenciador.jpg)

Este projeto foi desenvolvido como parte do processo seletivo para a vaga de Pessoa Desenvolvedora Frontend Jr.

## ✨ Funcionalidades Implementadas

- [x] **Adicionar Tarefas:** Criação de novas tarefas com validação para impedir campos vazios.
- [x] **Gerenciar Tarefas:** Exclusão e edição do texto de tarefas existentes.
- [x] **Status das Tarefas:** Marcar e desmarcar tarefas como concluídas, com feedback visual.
- [x] **Persistência de Dados:** As tarefas são salvas no `localStorage` do navegador, mantendo o estado entre as sessões.
- [x] **Filtros Dinâmicos:** Filtrar a visualização entre "Todas", "Pendentes" e "Concluídas".
- [x] **Ordenação Dinâmica:** Ordenar as tarefas por data de criação ("Mais Recentes" e "Mais Antigos").

## 🚀 Tecnologias Utilizadas

* Vue.js 3 (Options API)
* Vite
* Bootstrap 5
* ESLint + Prettier

## ⚙️ Como Executar o Projeto Localmente

```bash
# 1. Clone este repositório
git clone [https://github.com/gabrielgomesxp/desafio-05.git](https://github.com/gabrielgomesxp/desafio-05.git)

# 2. Navegue até o diretório do projeto
cd desafio-05/gabriel-gomes/todo-app

# 3. Instale as dependências
npm install

# 4. Inicie o servidor de desenvolvimento
npm run dev