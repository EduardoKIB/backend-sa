import { sql } from './db.js'

sql`

INSERT INTO CLIENTE (nome, senha, email, telefone, Data_Entrada, Data_Saida) VALUES
('Clark', '1234567', 'clarkzinho@gameplays.com', '43412', '2013-12-20', '2024-04-20'),
('Clarke', '1234567e', 'clarkzinho@gameplays.come', '43412e', '2013-12-20', '2024-04-20'),
('Clarkt', '1234567t', 'clarkzinho@gameplays.comt', '43412t', '2013-12-20', '2024-04-20');




`.then(() => {
  console.log('tabela populada');
})