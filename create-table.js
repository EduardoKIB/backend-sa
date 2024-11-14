import { sql } from './db.js'

sql`

CREATE TABLE CLIENTE(
  Idcliente SERIAL PRIMARY KEY NOT NULL,
  nome varchar(50) NOT NULL,
  senha varchar(50) NOT NULL,
  email varchar(50) NOT NULL,
  telefone varchar(50) NOT NULL,
  Data_Entrada date NOT NULL,
  Data_Saida date NOT NULL
);




`.then(() => {
  console.log('tabela criada');
})