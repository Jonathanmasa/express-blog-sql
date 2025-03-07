const express = require('express');
const app = express();
const port = 3000;

// registro il body-parser per application/json
app.use(express.json());

// definiamo l'uso di una cartella per i file statici
app.use(express.static('public'));

// cors
const cors = require('cors');
// registro il middleware di CORS
app.use(cors({ origin: 'http://localhost:5173' }));

// importo il router dei posts
const postsRouter = require('./routers/posts');
// utilizzo la rotta dei post per definire la parte iniziale
app.use("/posts", postsRouter)


// importo il middleware di checkApi
// const checkApi = require('./middlewares/checkApi')


// importo il middleware di errore
const errorsHandler = require("./middlewares/errorsHandler");

// importo il middlware di not found
const notFound = require("./middlewares/notFound");


// registro il middlware di checkApi
// app.use(checkApi);

// registro il middlware di errore
app.use(errorsHandler);

// registro il middlware di  not found
app.use(notFound);







// index
app.get('/posts', function (req, res) {
res.send('Lista dei post');
});

// show
app.get('/posts/:id', function (req, res) {
res.send('Dettagli dei post' + req.params.id);
});

// store
app.post('/posts', function (req, res) {
res.send('Creazione nuovo post');
});

// update
app.put('/posts/:id', function (req, res) {
res.send('Modifica integrale del post' + req.params.id);
});

// modify
app.patch('/posts/:id', function (req, res) {
res.send('Modifica parziale del post' + req.params.id);
});

// destroy
app.delete('/posts/:id', function (req, res) {
res.send('Eliminazione del post' + req.params.id);
});
    
   

// partenza dal server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})