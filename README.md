# WhatsApp Bot Template

Um template pronto para uso para criação de bots de WhatsApp utilizando a biblioteca **Baileys**. Este projeto foi desenvolvido com **TypeScript**.

---

## Funcionalidades

- **Estrutura Modular**: Handlers separados para mensagens, facilitando a escalabilidade.

---

## Tecnologias Principais

- [Node.js](https://nodejs.org/) (v16+)
- [TypeScript](https://www.typescriptlang.org/)
- [Baileys](https://github.com/WhiskeySockets/Baileys)

---

## Como Começar

### Pré-requisitos

Certifique-se de ter o **Node.js** e o **npm** (ou yarn) instalados em sua máquina.

### Instalação

1. Clone o repositório:
```bash
git clone https://github.com/luarrekcah/WhatsApp-bot-template.git
cd WhatsApp-bot-template
```

2. Instale as dependências:
```bash
npm install
```

### Uso

#### Desenvolvimento
Para rodar em modo de desenvolvimento com auto-reload:
```bash
npm run dev
```

#### Produção
Para compilar e rodar em produção:
```bash
npm start
```

---

## Configuração

Você pode configurar o método de conexão editando o arquivo `src/index.ts`:

- `CONNECTION_TYPE`: Mude para `"QR"` ou `"NUMBER"`.
- `PHONE_NUMBER`: Se usar `"NUMBER"`, insira o número com DDI e DDD (ex: `55689...`).

---

## Estrutura do Projeto

```text
src/
├── handlers/    # Manipuladores de eventos (mensagens, chamadas, etc.)
├── utils/       # Funções utilitárias e configurações globais
└── index.ts     # Ponto de entrada e configuração do socket
```

---

## Termux (Android)

Para rodar diretamente no Android via Termux:

```bash
pkg install git nodejs && git clone https://github.com/luarrekcah/WhatsApp-bot-template.git && cd WhatsApp-bot-template && npm install && npm run dev
```

---

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir uma **Issue** ou enviar um **Pull Request**.

---

## 📄 Licença

Este projeto está sob a licença [ISC](LICENSE).

---

Desenvolvido por [DevLuar](https://devluar.com)
Solicite seu orçamento aqui: https://devluar.com