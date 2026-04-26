# AOFlix 🎬

![AOFlix Banner](https://raw.githubusercontent.com/Tsiangana/AOFlix/main/img/banner_placeholder.png)

> Uma plataforma de streaming moderna, inspirada na interface do Netflix, desenvolvida com PHP e MySQL.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![PHP Version](https://img.shields.io/badge/php-%5E7.4%20%7C%208.x-blue.svg)](https://www.php.net/)
[![MySQL](https://img.shields.io/badge/mysql-%234479A1.svg?style=flat&logo=mysql&logoColor=white)](https://www.mysql.com/)

---

## 🌟 Visão Geral

O **AOFlix** é um clone funcional do Netflix que oferece uma experiência completa de catálogo de filmes e séries. O projeto foi construído para demonstrar habilidades em desenvolvimento Full Stack, integração de banco de dados e design de interface responsiva.

## 🚀 Funcionalidades Principais

- **🔐 Autenticação de Usuários:** Sistema completo de Login e Cadastro com validação.
- **🛠️ Painel Administrativo:** Interface dedicada para gerenciar filmes, usuários e categorias.
- **📁 Categorização Inteligente:** Organização de conteúdo por gênero (Ação, Crime, Drama, etc.).
- **🔍 Busca Dinâmica:** Filtragem de títulos em tempo real.
- **🎥 Player de Vídeo Integrado:** Suporte a trailers e vídeos em HTML5 com controles personalizados.
- **📱 Design Responsivo:** Interface otimizada para diferentes tamanhos de tela.
- **⭐ Favoritos e Listas:** Opção para adicionar títulos à lista de preferências.

## 🛠️ Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Linguagem:** [PHP](https://www.php.net/) (Lógica de servidor e comunicação com DB)
- **Banco de Dados:** [MySQL](https://www.mysql.com/) (Armazenamento de dados)
- **Frontend:** HTML5, CSS3, JavaScript (ES6+)
- **Bibliotecas:** [jQuery](https://jquery.com/) (Interações dinâmicas)
- **Ícones:** [Bootstrap Icons](https://icons.getbootstrap.com/)
- **Servidor Local Recomendado:** [XAMPP](https://www.apachefriends.org/) ou [WampServer](https://www.wampserver.com/)

## ⚙️ Instalação e Configuração

Siga os passos abaixo para rodar o projeto localmente:

### 1. Pré-requisitos
- Ter o **XAMPP** (ou similar) instalado.
- Servidor **Apache** e **MySQL** ativos.

### 2. Clonar o Repositório
```bash
git clone https://github.com/Tsiangana/AOFlix.git
```

### 3. Configurar no Servidor
Mova a pasta do projeto para o diretório `htdocs` do seu servidor local:
- No Windows: `C:\xampp\htdocs\AOFlix`
- No Linux: `/opt/lampp/htdocs/AOFlix`

### 4. Banco de Dados
1. Acesse o **phpMyAdmin** (`http://localhost/phpmyadmin`).
2. Crie um novo banco de dados chamado `aoflix`.
3. Importe o arquivo SQL fornecido com o projeto (geralmente localizado na pasta `bd` ou `database`).
4. Verifique as credenciais no arquivo `cofing.php`:
   ```php
   $conn = mysqli_connect('localhost', 'root', '', 'aoflix');
   ```

### 5. Acessar a Aplicação
Abra o seu navegador e digite:
`http://localhost/AOFlix/inicio.php`

## 📸 Screenshots

<div align="center">
  <img src="img/preview1.png" alt="Home Screen" width="45%">
  <img src="img/preview2.png" alt="Admin Panel" width="45%">
</div>

---

## 🤝 Contribuição

Contribuições são o que fazem a comunidade open source um lugar incrível para aprender, inspirar e criar. Qualquer contribuição que você fizer será **muito apreciada**.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Insira suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## ✒️ Autores

* **Tsiangana** - *Desenvolvimento Inicial* - [Seu GitHub](https://github.com/Tsiangana)

## 📄 Licença

Este projeto está sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

---
<p align="center">Desenvolvido com ❤️ por <a href="https://github.com/Tsiangana">Tsiangana</a></p>
