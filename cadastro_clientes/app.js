const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const clienteRoutes = require('./routes/clienteRoutes');

const app = express();

// Configura o Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

// Configura a pasta de arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Configura o View Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

// Rotas
app.use('/clientes', clienteRoutes);

// Página Inicial
app.get('/', (req, res) => {
    res.redirect('/clientes');
});

// Inicia o Servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});