## WebSocket-WebScraping

- # Características do projeto:
> Realizar um WebScraping no site 'https://br.betano.com/'<br>
> Buscar dados da tabela de 'Principais Eventos'<br>
> Tratar esses dados para o formato [{evento: "França x Marrocos", timeA: "França", timeB: "Marrocos", odds: {casa: 1.57, empate: 4.20, visitante: 7.40}, ...]<br>
> Criar um servidor WebSocket que entrega esses dados<br>


- # Execução do projeto:
> e preciso ter o node16 e o yarn instalados.<br>
> faça o clone ou dowload do projeto.<br>
> abra o terminal na pasta back-end e execute os comandos:<br>
> yarn 'para instalar as dependências'<br>
> yarn dev 'para iniciar o servidor'<br><br>

> abra outro terminal na pasta front-end e execute os comandos:<br>
> yarn 'para instalar as dependências'<br>
> yarn dev 'para iniciar o projeto do front'<br>
> abra o navegador com a url 'http://localhost:3000/' para visualizar o projeto<br><br>

>caso queira executar só o servidor back-end sem o socket<br>
>rode os comando do back-end e faça um requisição para a url 'http://localhost:3300/' no seu navegador.

- # OBS:
> O projeto ainda não roda em docker.
