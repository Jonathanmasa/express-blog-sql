// importo il file posts.js della cartella data
// const posts = require('../data/posts');

// Importiamo il file di connessione al database
const connection = require('../data/db');

// Index
function index(req, res) {
    // prepariamo la query
    const sql = 'SELECT * FROM posts';
    // eseguiamo la query!
    connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: 'Database query failed' });
    res.json(results);
    });
}

// logica show
function show(req, res) {
    // recupero l'ID dell'URL e lo trasformo in numero
    const id = parseInt(req.params.id);
    // cerco il post tramide ID
    const post = posts.find(post => post.id === id);
    // restituiscoin formato json
    res.json(post);
};

// logica store
function store(req, res) {
    const newId = posts[posts.length - 1].id + 1;
    // Creiamo un nuovo oggetto post
    const newPost = {
    id: newId,
    title: req.body.title,
    content: req.body.content,
    image: req.body.image,
    tags: req.body.tags
    }
    // Aggiungiamo il nuovo post a posts
    posts.push(newPost);

    // controlliamo
    // console.log(posts);

    // Restituiamo lo status corretto e il post appena creato
    res.status(201);
    res.json(newPost);
};

// logica update
function update(req, res) {
    // recuperiamo l'id dall' URL e trasformiamolo in numero
    const id = parseInt(req.params.id);
    // cerchiamo il post tramite id
    const post = posts.find(post => post.id === id);

    // Piccolo controllo
    if (!post) {
        res.status(404);
        return res.json({
            error: "Not Found",
            message: "Post non trovato"
        })
    }

    // Aggiorniamo il post
    post.title = req.body.title;
    post.content = req.body.content;
    post.image = req.body.image;
    post.tags = req.body.tags;

    // Controlliamo i posts
    console.log(posts)

    // Restituiamo il post appena aggiornato
    res.json(post);
};

// logica modify
function modify(req, res) {
    res.send('Modifica parziale del post' + req.params.id);
    };

// logica destroy
function destroy(req, res) {
    // recupero l'ID dell'URL e lo trasformo in numero
    const id = parseInt(req.params.id);
    // cerco il post tramide ID
    const post = posts.find(post => post.id === id);
    // controllo
    if (!post) {
        res.status(404);

        return res.json({
            status: 404,
            error: "Not Found",
            message: "Post non trovato"
        })
    }
    // rimuovo il post dall'array
    post.splice(post.indexOf(post), 2);

    // restituisco lo status corretto
    res.sendStatus(204)
};

// esportiamo tutto
module.exports = { index, show, store, update, destroy, modify};