# curso-angular-1
Para acompanhar aulas do curso de Angular

CURSO ANGULAR 1
===============

# acessando a pasta do projeto...
cd C:\Users\Marco\git\marco\github\curso-angular-1

# Para criar um projeto...
# A pasta my-app-01 serah criada no ponto onde for executado o comando
ng new my-app-01

# Para iniciar o servidor
# cd <pasta da app>
# tive de executar de dentro do terminal do vscode pra funcionar
ng serve

# acessando o app
http://localhost:4200/


# Estrutura de arquivos
node-modules
	contém pacotes
src
	conterá a lógica que iremos escrever bem como os arquivos CSS, HTML, etc

	angular gera um aplicativo de página única, portanto haverá uma página html gerada
	index.html (a aplicação está na linha 11 <app-root></app-root>)

	styles.css -> informações de estilo global
	
	test.ts -> teste
	
	main.ts -> aqui podemos editar a saida
	
	
arquivos de configuração .json na raiz do prjeto
	.browserlistrc: arquivo de compatibilidade do navegador
	.editorconfig : arquivo de configuração do editor
	 angular.json : versao do projeto
	                nome do projeto
					dependencias e outras coisas que o projeto terah.
					parametros do ambiente de produção e desenvolvimento
	 karma.conf.js: se refere aos testes
	 package-lock.json
	 package.json  : pacotes que estamos usando com o angular
					 conjunto de comandos usados para executar a aplicação
	                 dependencias exigidas pela aplicação
					 - dependencias de desenvolvimento e de produção separadas
					 
					 
					 
8. Writing Hello World App
   No arquivo app.component.html, apague tudo e insira a linha: <h1>Hello World!</h1>

9. String Interpolation
   1. Acrescente a linha (memberName = 'Nome-01') a class abaixo:
    export class AppComponent {
		title = 'my-app-01';
		memberName = 'Nome-01';
    }
	 
	2. No arquivo app.component.html, acrescente a linha abaixo: 
		<h1>I am {{memberName}}</h1> 
