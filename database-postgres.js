import { randomUUID } from "crypto";
import { sql } from './db.js';

export class DatabasePostgres { 
  async listclientes () {
    const clientes = await sql`select * from clientes`;
    return clientes;
  }

  async createClientes(cliente) {
    const id = randomUUID();
    console.log('id', id);
    const nome = cliente.nome;
    const senha = cliente.senha;
    const email= cliente.email;
    const telefone= cliente.telefone;

    const numero_quarto = cliente.numero_quarto;
    const data_inicio = cliente.data_inicio;
    const data_saida = cliente.data_saida;
        await sql`insert into clientes (id, nome, senha,email,telefone, numero_quarto, data_inicio)
    values (${id}, ${nome}, ${senha}, ${email}, ${telefone},${numero_quarto},${data_inicio}, ${data_saida})`
  }

  async updateClientes(id, cliente) {
    const nome = cliente.nome;
    const senha = cliente.senha;
    const email= cliente.email;
    const numero_quarto = cliente.numero_quarto;
    const data_inicio = cliente.data_inicio;
    const data_saida = cliente.data_saida;

    await sql`update clientes set 
        nome = ${nome},
        senha = ${senha},
        email = ${email},
        numero_quarto = ${numero_quarto},
        data_inicio = ${data_inicio},
        data_saida = ${data_saida},
        where id = ${id}
    `;
  }

  async deleteCliente(id) {
    await sql`delete from clientes where id = ${id}`
  }

}