# CitySync

**Plataforma de registro e acompanhamento de problemas urbanos.**

Projeto desenvolvido como parte do curso de Engenharia de Software do Centro Universitário das Faculdades Integradas de Ourinhos (UniFio).

## 🌐 Acesso ao projeto

- **Aplicação publicada:** https://projetofinal-eta.vercel.app
- **Repositório GitHub:** https://github.com/RafaelAmadei/ProjetoFinal

## 📌 Sobre o projeto

O CitySync é uma plataforma desenvolvida com o objetivo de facilitar a comunicação entre a população e os órgãos responsáveis pela infraestrutura urbana.

Por meio do sistema, os cidadãos podem registrar problemas encontrados nas cidades, como buracos nas vias, problemas de sinalização, iluminação pública e outras ocorrências.

A proposta busca tornar a identificação desses problemas mais simples, acessível e organizada, incentivando a participação da comunidade na melhoria dos espaços urbanos.

## 🎯 Objetivos

- Facilitar o registro de problemas urbanos.
- Permitir que os cidadãos visualizem ocorrências registradas.
- Organizar informações sobre os problemas identificados.
- Incentivar a participação da comunidade.
- Contribuir para a melhoria da infraestrutura das cidades.

## ⚙️ Funcionalidades

- **Página inicial:** apresentação da plataforma e de suas funcionalidades.
- **Explorar locais:** visualização e consulta das ocorrências cadastradas.
- **Registrar ocorrência:** formulário para cadastrar problemas urbanos.
- **Gerenciamento de ocorrências:** edição, exclusão e atualização de status.
- **Meu perfil:** edição de informações pessoais e visualização das próprias ocorrências.
- **Como denunciar:** orientações sobre como registrar problemas urbanos.

## 🛠️ Tecnologias utilizadas

- Angular 22
- TypeScript
- HTML5
- CSS3
- Angular Material
- Node.js
- npm
- Git e GitHub
- Vercel

## 💾 Armazenamento de dados

Nesta versão do Front-end, os dados das ocorrências e do perfil são armazenados localmente no navegador por meio do `localStorage`.

A integração completa com o Back-end desenvolvido em Spring Boot não está implementada nesta versão.

## 🚀 Como executar o projeto

### Pré-requisitos

- Node.js
- npm
- Git

### Instalação

Clone o repositório:

```bash
git clone https://github.com/RafaelAmadei/ProjetoFinal.git
```

Entre na pasta do Front-end:

```bash
cd ProjetoFinal/citysync
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm start
```

Acesse no navegador:

```text
http://localhost:4200
```

## 🏗️ Compilação para produção

Para gerar a versão de produção:

```bash
npm run build
```

Os arquivos compilados serão gerados em:

```text
dist/citysync/browser
```

## 📁 Estrutura do projeto

```text
ProjetoFinal/
│
├── citysync/
│   ├── public/
│   ├── src/
│   │   └── app/
│   │       ├── pages/
│   │       ├── shared/
│   │       └── services/
│   ├── angular.json
│   ├── package.json
│   └── vercel.json
│