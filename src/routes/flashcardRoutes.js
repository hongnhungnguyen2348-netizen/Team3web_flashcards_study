const express = require('express');
const router = express.Router();
const flashcardController = require('../controllers/flashcardController');
const { isAuthenticated } = require('../middleware/auth');

router.use(isAuthenticated);

router.get('/', flashcardController.getCollections);
router.post('/', flashcardController.createCollection);
router.get('/:id', flashcardController.getCollectionById);
router.put('/:id', flashcardController.updateCollection);
router.delete('/:id', flashcardController.deleteCollection);

router.post('/:id/cards', flashcardController.addCard);
router.put('/:id/cards/:cardId', flashcardController.updateCard);
router.delete('/:id/cards/:cardId', flashcardController.deleteCard);

module.exports = router;
