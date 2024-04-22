# curso-angular-1
Para acompanhar aulas do curso de Angular

## 2. Setup e Config
acessando a pasta dos projetos...
```bash
cd C:\Users\Marco\git\marco\github\curso-angular-1
```
Para criar um projeto...
A pasta my-app-01 serah criada no ponto onde for executado o comando
```bash
ng new my-app-01
```

Para iniciar o servidor
```bash
cd <pasta da app>
ng serve
```
Obs: tive de executar de dentro do terminal do vscode pra funcionar

Acesse o app em http://localhost:4200/

### Estrutura de arquivos
- node-modules
	- contém pacotes
- src
	- conterá a lógica que iremos escrever bem como os arquivos CSS, HTML, etc
	- angular gera um aplicativo de página única, portanto haverá uma página html gerada
	- index.html (a aplicação está na linha 11 <app-root></app-root>)
	- styles.css -> informações de estilo global
	- test.ts -> teste
	- main.ts -> aqui podemos editar a saida
	
	
- arquivos de configuração .json na raiz do prjeto
	- .browserlistrc: arquivo de compatibilidade do navegador
	- .editorconfig: arquivo de configuração do editor
	- angular.json: 
		- versao do projeto
	    - nome do projeto
		- dependencias e outras coisas que o projeto terah.
		- parametros do ambiente de produção e desenvolvimento
	- karma.conf.js: se refere aos testes
	- package-lock.json
	- package.json:
		- pacotes que estamos usando com o angular
		- conjunto de comandos usados para executar a aplicação
	    - dependencias exigidas pela aplicação
		- dependencias de desenvolvimento e de produção separadas
					 
					 
## 3 Creating First Project					 
### 3.8 Writing Hello World App
No arquivo app.component.html, apague tudo e insira a linha: 
```html
<h1>Hello World!</h1>
```

### 3.9 String Interpolation
Acrescente a linha (memberName = 'Nome-01') a class abaixo:
```typescript
export class AppComponent {
	title = 'my-app-01';
	memberName = 'Nome-01';
}
```
	
#### No arquivo app.component.html, acrescente a linha abaixo:
```html 
	<h1>I am {{memberName}}</h1> 
```

## 6. Creating course project
### 6.19 create project

#### criando o projeto live posts... 
```bash
cd cd C:\Users\Marco\git\marco\github\curso-angular-1
ng new live-posts
```

#### compilando...
```bash
cd live-posts
ng serve
```

#### desfazendo o projeto padrao...
Apague o conteudo de  live-posts/src/app/app.component.html e inclua 
```html 
<h1>Hello World!</h1>
```
### 6.20 Adding Header Component
Abra um novo terminal
```bash 
cd live-posts
ng generate component header
```
- foi criada a pasta header comos arquivos do componente header
- app.component.spec.ts e header.component.spec.ts são um arquivos de teste

### 6.21 Adding Remaining Component
```bash 
ng generate component post-list
ng g c post
ng g c post-edit
ng g c auth
```

### 6.22 Downloading and Running Project
Em casa capítulo serah fornecido um arquivo com o prjeto
Se percisar: 
- descompacte o arquivo
- execute npm install
- execute ng serve

## 7. Working On Header Component
### 7.23 Placing Header Component
- Em app.component.ts, adicione:
```typescript
import { HeaderComponent } from './header/header.component';
```
- Depois adicione:
```typescript
imports: [HeaderComponent],
```
Aí fica disponível a <app-header>. Inclua esta tag no app.component.html
Pronto. Acabou de inserir o componente na página principal.

### 7.24 Adding Menu
- Acesse o site https://www.w3schools.com/bootstrap/bootstrap_navbar.asp
- Aqui o componente que queremos usar como nosso Menu.
- Vá até a seção: Collapsing The Navigation Bar
- Vá em Try it yourself
- Copie a barra de navegacao e cole em header.component.html
- Copie as 3 últimas linhas do cobeçalho e cole no abeçalho de index.html
- ng serve

### 7.25 Customizing Menu
Troque o nome da aplicação para Live-Posts. Fica em "navbar-brand"
```html 
<a class="navbar-brand" href="#">Live-Posts</a>
```
Elimine os menus da esquerda. Mantenha dois menus chamados "Home" e "Add Post"
```html 
<li><a href="#">Home</a></li>
<li><a href="#">Add Post</a></li>
```

## 8. Working On Post List Component
### 8.26 Placing Post List Component
Em app.component.ts, adicione:
```typescript
import { PostListComponent } from './post-list/post-list.component';
```

Depois adicione:
```typescript 
imports: [PostListComponent],
```

Aí fica disponível a tag abaixo. Inclua no app.component.html 
```html
<app-post-list></app-post-list>
```
Pronto. Acabou de inserir o componente na página principal.

### 8.27 Displaying Post Component
Em post-list.component.ts, adicione:
```typescript
import { PostComponent } from './post/post.component';
```

Depois adicione:
```typescript 
imports: [PostComponent],
```

Aí fica disponível a tag abaixo para ser usado no post.component.html. Use-a. 
```html
<app-post></app-post>
<app-post></app-post>
<app-post></app-post>
<app-post></app-post>
```
Pronto. Acabou de inserir o componente post no componente post-list.

### 8.28 Improving Post Component
Em post.component.html insira:
```html
<h2>Nature</h2>
<p>O "Busque um trecho de texto e cole aqui. </p>
<img src="https://s2.glbimg.com/bGNljVTtWba-Xlm9T0JxmhONKqg=/620x455/e.glbimg.com/og/ed/f/original/2020/06/28/rio-em-meio-as-pedras-170721_joao_machado_e_arasi-87.jpg"
 class="img-responsive"
/>
<p>Author: test&#64;test.com</p>
<p>Date: 19/03/2024</p>
<button>Edit</button> | <button>Delete</button>
```
Como exercicio, troque o link da imagem por uma imagem de sua preferência.

### 8.29 Creating Post Model
### 8.30 Array os POst Objects
### 8.31 Use of @Input() Decorator
### 8.32 Displaying Post With Input Data
### 8.33 @Input() In Depth


