# angular-finals

O objetivo desta prova é implementar um sistema de mensagens, onde um usuário pode enviar mensagens para outros. Sendo disponibilizado uma API para que
possa ser efetuada as requisições e testes com o endpoint "http://10.234.195.227:5294" e a documentação da api está no seguinte link:
https://github.com/NycollasSobolevski/dta-angular-class/blob/api/rPlaceApi/Prova.Readme.md
Todas as features (Autenticação, Contatos e Messagens) terá que ter um serviço próprio para que possa comunicar com o backend.
Lembrando: será avaliado tambem a organização de arquivos dentro das pastas.
Obrigatório: Utilizar signal para renderização otimizada.

Competências:
Compreender Arquitetura Angular e seus comandos - aula 1 (2hrs)
	- Utilizar comando de criação de projeto angular ✅
	- Utilizar comando de criação de componente ✅
	- Utilizar comando de criação de serviços ✅

Elaborar componentes (templates e bindings) - Aula 1 e 2 (6 hrs)
	- Criar componente na pasta correta ✅
	- Comunicar o template (html) com o arquivo principal do componente (ts) ✅
	- Aplicar Property Binding para enviar dados ao componente ✅
	- Aplicar Event Binding para reagir/receber dados do componente ✅
	- Aplicar two-way Binding (ngModel) para sincronização do componente ⚠️
	- Aplicar elementos de condições no template (@if, @for) ✅

Produzir formulários reativos utilizando forms - Aula 3 (1hr)
    - Criar um formulário utilizando FormGroup e FormControl ✅
	- Utilizar FormBuilder para simplificar a criação de formulário ✅
	- Implementar validações (Validators.required,Validators.minLength...) ✅
	- EXTRA: Exibir mensagem de erro de validação ⚠️

Utilizar o conceito de SPA (single page application) - Aula 3 (2hrs)
    - Definir rotas para diferentes componentes (app.routes.ts) ✅
	- Utilizar a diretiva router-outlet para criação de paginas filhas (childs) ✅
	- Criar links de navegação entre paginas (routerLink) ✅ feito c router, nao routerLink

Compreender funcionamento de componentes 'standalone'  - Aula 3 (1hr)
    - utilizar a propriedade standalone = true em componentes. ✅
	- Importar componentes, diretivas ou pipes diretamente no array 'imports' do componente ✅
	- Configurar Rotas utilizando componente standalone por meio de 'loadComponent' ✅

Aplicar ferramentas de otimização de renderização reativa (signals) - Aula 4 (4 hrs)
	- Criar um signal para armazenamento de estado reativo ✅
	- Modificar o valor de signal utilizando .set ⚠️
	- Modificar o valor de signal utilizando .update ⚠️
	- Criar um Computed signal para monitoramento ⚠️
	- Ler valor de signal corretamente (variavel()) ⚠️

Aplicar ferramentas de operações assíncronas (observables) - Aula 5 (2 hrs)
	- Fazer inscrições com Subscribe() ⚠️
	- Utilizar pipe async no template ⚠️

Utilizar modulação para fazer requisições https - Aula 5 (2hrs)
	- Configurar HTTPCLIENT no projeto (provideHttpClient()) ✅
	- Injetar httpClient em um serviço ✅
	- realizar operações http de apis (get, post, put, delete) ✅