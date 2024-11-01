import { sql } from './db.js'

sql`
  CREATE TABLE clientes  (
      id text PRIMARY KEY NOT NULL,
      nome character varying(255) NOT NULL,
      senha character varying(50) NOT NULL,
      numero_quarto integer NOT NULL,
      email character varying(255) NOT NULL,
      telefone TEXT NOT NULL, 
      data_inicio date NOT NULL,
      data_saida date NOT NULL
  );
`.then(() => {
  console.log('tabela criada');
})