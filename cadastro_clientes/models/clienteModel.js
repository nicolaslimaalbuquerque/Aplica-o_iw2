const db = require('../config/db');

class Cliente {
    static async fetchAll() {
        const [rows] = await db.execute('SELECT * FROM clientes');
        return rows;
    }

    static async findById(id) {
        const [rows] = await db.execute('SELECT * FROM clientes WHERE id = ?', [id]);
        return rows[0];
    }

    static async save(cliente) {
        const { nome, email, telefone } = cliente;
        await db.execute('INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)', [nome, email, telefone]);
    }

    static async update(id, cliente) {
        const { nome, email, telefone } = cliente;
        await db.execute('UPDATE clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?', [nome, email, telefone, id]);
    }

    static async delete(id) {
        await db.execute('DELETE FROM clientes WHERE id = ?', [id]);
    }
}

module.exports = Cliente;