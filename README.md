# ✨ Sejam bem vindos ao repositório do projeto desevolvido para o processo seletivo da Turma XP-Trybe

Este projeto consiste em criar uma API para ser consumida por uma aplicação que se assemelha a um aplicativo de investimentos em ações e algumas funcionalidades de uma conta digital.

<details>
<summary><strong>🍀 Endpoints:</strong></summary><br />

> - Fazer login `/login`
> - Criar uma conta `/conta`
> - Busca do saldo do cliente pelo seu código de identificação do cliente `/conta/:id`
> - Busca de ações pelo código de indentificação do cliente `/conta/ativos/:codCliente`
> - Realização de um saque `/conta/saque`
> - Realização de um depósito `/conta/deposito`
> - Comprar ações `/investimentos/comprar`
> - Vender ações `/investimentos/vender`
> - Busca de ações pelo código de indentificação da ação `/ativos/:codAtivo`
> - Listagem das ações com a quantidade de ações investidas `/ativos-investidos`
</details>

Para o desenvolvimento desse projeto começei pensando em como faria para armazenar os dados das ações, dos clientes. E para isso fiz a escolha de criar um banco de dados com Squelize, pois facilita na criação do banco onde tenho tabelas relacionadas, além de facilitar caso seja necessário utilizar outra linguagem de banco, nesse projeto foi usado o MySQL.
Esse projeto foi desenvolvido em JavaScript, utilizando Node.js, com o framework Express. Pensando em arquitetura, o padrão MSC foi escolhido em busca organização e divisão de responsabilidades.
Foi utilizado middlewares para as validações, e um middleware de erro que captura e trata o erro em qualquer lugar da aplicação. Para os testes unitários foi utilizado o jest. E o swagger para documentar as rotas.

### 🔎 Orientações

1. Clone o repositório:

- `git clone https://git@github.com:Barbaraqsoares/desafio-xp.git`

- Entre na pasta do repositório:

  - `cd desafio-xp`
  

2. Instale as dependências com:
   
  -  `npm install`

3. Rode os comandos:
   
   OBS: para que funcione corretamente, é necessário um DB MySql disponível, e setar as credenciais no arquivo `.env`
   
   - Para criar o BD: `npx sequelize db:create`
   - Para rodar as *migrations*: `npx sequelize db:migrate`
   - Para rodar as *seeder*: `npx sequelize db:seed:all`

4. Para rodar sua aplicação localmente rode o comando:
   
   - `npm start`

5. Para rodar os testes use o comando:
   
   - `npm test`

<details>
<summary><strong>🍀 Maiores Desafios:</strong></summary><br />

   - O desafio começou em como guardaria meus dados, como simularia um **DB**. Tenho que criar um fictício ou uso o módulo **fs** do node? Ainda em relação aos dados, depois de escolher criar um **DB**, o desafio se apresentou ao pensar em como seriam os relacionamentos das tabelas.
   - Também encontrei desafios ao criar as rotas para compra e venda de ações, mas pesquisando encontrei uma forma muito boa de fazer isso, utilizando as <strong>[*transaction*]</strong>, elas permitem executar uma sequência de operações de forma a garantir a integridade dos dados. Para esse caso foi perfeito pois, o valor do saldo do cliente e a quantidade de ações disponíveis teriam que mudar ao mesmo tempo, juntas. Não poderia descontar o saldo do cliente sem garantir que as outras operações também tivessem concluidas com êxito.
   - Outro ponto foi retornar a lista de ações com a quantidade já investida em cada ação. Para isso foi utilizado dois métodos do sequelize <strong>*sequelize.fn*</strong> e <strong>*sequelize.col*</strong>, isso permitiu fazer a soma das qauntidades de ações que já tinham sido compradas, mas estava em outra tabela, <strong>`Carteiras`</strong>, que continha o idCliente, idAtivo e a qntAcao (quantidade de ação que o cliente comprou)
   - Um desafio que eu não imaginei que seria foi o Swagger, eu não consegui fazer com que ele ficasse redondinho, isso me frustrou muito, porque eu imaginei que ao consultar a documentação parecia tranquilo de fazer. Preciso dedicar mais tempo e saber o motivo de não estarem funcionando as rotas. Deixo aqui tudo que implementei até o envio desse desafio com o objetivo de até porder ouvir um caminho a seguir para concluir esse requisito.
   - Outro ponto importante foi a gestão do meu próprio tempo, consegui alcançar algumas metas, mas posso melhorar mais nesse quesito.

</details>

<details>
<summary><strong>🍀 Melhorias:</strong></summary><br />

   - Finalizar os testes
   - Finalizar Swagger
   - Fazer o deploy da aplicação
   - Fazer possíveis melhorias de refatoração, e até mesmo implantação de novos recursos.

</details>
