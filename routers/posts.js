// importo express e utilizzo la parte di routing
const express = require('express');
const router = express.Router();
// importo le funzioni del controller
const postController = require('../controllers/postController');

// importo il middleware di checkApi
// const checkApi = require('../middlewares/checkApi');

// uso per il router
// router.use(checkApi);



// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// store
router.post('/', postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);

// destroy
router.delete('/:id', postController.destroy);

// esporto il modulo della route
module.exports = router;



