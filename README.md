# Gestionnaire de Candidatures

- [🇫🇷 Version Française 🧀 🥖 🥐](#version-française)

- [🇬🇧 English Version 💂 🫖 👑](#english-version)

- [🇧🇷-PT Versão Portuguesa ⚽ ☀️ 🥸](#versão-portuguesa)


## Version Française

### Titre: Gestionnaire de Candidatures

### Description:
Cette application a pour objectif d'enregistrer vos candidatures à des offres d'emploi, d'enregistrer les informations de l'entreprise à laquelle vous avez postulé, qui a été contacté dans l'entreprise, etc.


## Aspects Techniques

### Exigences Système

- Angular CLI : 13.3.9
- Node : 16.18.0
- Gestionnaire de paquets : npm 8.19.2
- .NET SDK : Version : 6.0.401.
- netcoreapp3.1
- SQL Server 2019

### Dépendances

Exécutez `Get-Package` dans votre console pour lister les paquets installés :

- Microsoft.EntityFrameworkCore.SqlServer {3.1.25}
- Swashbuckle.AspNetCore {6.4.0}
- Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore {3.1.25}
- Microsoft.AspNetCore.Identity.EntityFrameworkCore {3.1.25}
- Microsoft.EntityFrameworkCore.Relational {3.1.25}
- Microsoft.AspNetCore.SpaServices.Extensions {3.1.25}
- Microsoft.EntityFrameworkCore.Tools {3.1.25}
- Microsoft.VisualStudio.Web.CodeGeneration.Design {3.1.5}
- Microsoft.AspNetCore.Identity.UI {3.1.25}
- Microsoft.AspNetCore.ApiAuthorization.IdentityServer {3.1.25}

### Exécution du Projet Localement

- Créez la base de données basée sur les fichiers de migration existants dans le projet.
-- Exécutez les commandes suivantes dans cmd/powershell :
--- dotnet tool restore
--- dotnet build
--- dotnet ef database update

- Une base de données nommée "alexandredb" devrait avoir été créée dans votre SQL Server.

- Dans le dossier \therealred\ProjetRedLineAG\ProjetRedLineAG\ClientApp\ exécutez les commandes :
-- npm install
-- npm start

- Exécutez IIS Express dans Visual Studio

- PS :🚨 Une erreur de proxy 4200 se produira si IIS est exécuté avant Angular.
<br>
<br>
<br>


## English Version

### Title: Application Management Tool/System

### Description:
This application aims to record your applications to job offers, register information about the company you applied to, who was contacted at the company, and so on.

## Technical Aspects

### System Requirements

- Angular CLI: 13.3.9
- Node: 16.18.0
- Package Manager: npm 8.19.2
- .NET SDK: Version: 6.0.401.
- netcoreapp3.1
- SQL Server 2019

### Dependencies

Run `Get-Package` in your console to list installed packages:

- Microsoft.EntityFrameworkCore.SqlServer {3.1.25}
- Swashbuckle.AspNetCore {6.4.0}
- Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore {3.1.25}
- Microsoft.AspNetCore.Identity.EntityFrameworkCore {3.1.25}
- Microsoft.EntityFrameworkCore.Relational {3.1.25}
- Microsoft.AspNetCore.SpaServices.Extensions {3.1.25}
- Microsoft.EntityFrameworkCore.Tools {3.1.25}
- Microsoft.VisualStudio.Web.CodeGeneration.Design {3.1.5}
- Microsoft.AspNetCore.Identity.UI {3.1.25}
- Microsoft.AspNetCore.ApiAuthorization.IdentityServer {3.1.25}

### Running the Project Locally

- Create the database based on the existing migration files in the project.
-- Execute the following commands in cmd/powershell:
--- dotnet tool restore
--- dotnet build
--- dotnet ef database update

- A database named "alexandredb" should have been created in your SQL Server.

- In the folder \therealred\ProjetRedLineAG\ProjetRedLineAG\ClientApp\ run the commands:
-- npm install
-- npm start

- Run IIS Express in Visual Studio

- PS:🚨 A proxy error 4200 will occur if IIS is run before Angular.
<br>
<br>
<br>


## Versão Portuguesa

### Título: Gestionário de Candidaturas

### Descrição:
Esta aplicação tem como objetivo registrar suas candidaturas a ofertas de emprego, registrar informações da empresa à qual candidatou-se, quem foi contactado na empresa, e etc.

## Aspectos Técnicos

### Requisitos do Sistema

- Angular CLI: 13.3.9
- Node: 16.18.0
- Package Manager: npm 8.19.2
- .NET SDK: Version:   6.0.401.
- netcoreapp3.1
- SQL Server 2019

### Dependências

Get-Package

Id                                  Versions                                                                   
--                                  --------                                                                  
- Microsoft.EntityFrameworkCore.Sq... {3.1.25}                                                               
- Swashbuckle.AspNetCore              {6.4.0}                                                                
- Microsoft.AspNetCore.Diagnostics... {3.1.25}                                                               
- Microsoft.AspNetCore.Identity.En... {3.1.25}                                                               
- Microsoft.EntityFrameworkCore.Re... {3.1.25}                                                              
- Microsoft.AspNetCore.SpaServices... {3.1.25}                                                              
- Microsoft.EntityFrameworkCore.Tools {3.1.25}                                                              
- Microsoft.VisualStudio.Web.CodeG... {3.1.5}                                                                
- Microsoft.AspNetCore.Identity.UI    {3.1.25}                                                               
- Microsoft.AspNetCore.ApiAuthoriz... {3.1.25}                               



### Executando o Projeto Localmente

- Crie a base de dados baseado nos arquivos de migration que existem ja no projeto.
-- Execute os comandos no cmd / powershell 
--- dotnet tool resto
--- dotnet build
--- dotnet ef database update

- Uma base de dados com nome "alexandredb" deve ter sido criada no seu sql server

- Na pasta \therealred\ProjetRedLineAG\ProjetRedLineAG\ClientApp\ execute os commandos: 
-- npm install
-- npm start

- No Visual Studio execute o IIS Express

- PS: 🚨 Erro de proxy 4200 acontencera se executar o IIS antes do Angular. 





