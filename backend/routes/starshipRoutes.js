import express from 'express';
import starshipController from '../controllers/starshipController.js';

const router = express.Router();

router.post('/', starshipController.create);
router.get('/', starshipController.getAll);
router.get('/:id', starshipController.getById);
router.put('/:id', starshipController.update);
router.delete('/:id', starshipController.delete);

export default router;
