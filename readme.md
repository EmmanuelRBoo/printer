# PRINTER - Teste técnico

Olá

Eu criei este projeto usando arquitetura "SOLID" adaptada para programação funcional e o ORM [prisma.js]("https://www.prisma.io/").
Neste caso não temos a camada dos models pois o prisma.js cuida disso pra nós, no arquivo "/prisma/schema.prisma" temos os models setados, estes models são tipados e quando rodamos as migrations o prisma transforma em tabelas conforme configurarmos no arquivo.
A aplicação está hospedada no [render](https://render.com
) e o banco de dados está no [supabase](https://supabase.com/).

A API para teste é https://printer-p8u7.onrender.com e está versionada então todos os endpoints estão com o prefixo /api/v1 como por exemplo o swagger com a documentação do projeto que está no endpoint [/api/v1/api-docs](https://printer-p8u7.onrender.com/api/v1/api/docs).