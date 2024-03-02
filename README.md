# Gestionnaire de Candidatures

## Version Française

### Titre: Gestionnaire de Candidatures

### Description:
Cette application a pour objectif d'enregistrer vos candidatures à des offres d'emploi, d'enregistrer les informations de l'entreprise à laquelle vous avez postulé, qui a été contacté dans l'entreprise, etc.

## English Version

### Title: Application Management Tool/System

### Description:
This application aims to record your applications to job offers, register information about the company you applied to, who was contacted at the company, and so on.

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



### Executando o Projeto

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







