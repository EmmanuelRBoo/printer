# PRINTER - Teste técnico

Olá

Eu criei este projeto usando arquitetura "SOLID" adaptada para programação funcional e o ORM [prisma.js]("https://www.prisma.io/").
Neste caso não temos a camada dos models pois o prisma.js cuida disso pra nós, no arquivo "/prisma/schema.prisma" temos os models setados, estes models são tipados e quando rodamos as migrations o prisma transforma em tabelas conforme configurarmos no arquivo.
A aplicação está hospedada no [render](https://render.com
) e o banco de dados está no [supabase](https://supabase.com/).

A API para teste é https://printer-p8u7.onrender.com e está versionada então todos os endpoints estão com o prefixo /api/v1 como por exemplo o swagger com a documentação do projeto que está no endpoint [/api/v1/api-docs](https://printer-p8u7.onrender.com/api/v1/api/docs).

Algumas configurações são necessárias para conseguir usar algumas APIs como o entendimento do roleId, as roles são divididas em 3: 0 (ADMIN), 1 (USER), 2 (GUEST) e as permissions que são 'read', 'write' e 'delete' dentro de um array: por exemplo: o admin tem as permissions ['read', 'write', 'delete'], para alterar a permissão o endpoint precisa receber um array com as novas permissões: ['read', 'write]. Pode ser criado um novo usuário com uma das roleId citadas acima ou fazer login com um usuário já existente como { "email": "admin@admin.com, "password": "admin" } ou { "email": "guest@guest.com, "password": "guest" }.

Qualquer dúvida ou crítica pode entrar em contato comigo nos contatos abaixo:

* WhatsApp: +55 (41) 9 9154-8631
* Email: EmmanuelHonoratoBoo@gmail.com