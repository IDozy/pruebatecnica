import express from 'express';
import personController from '../controllers/personController.js';

const router = express.Router();

router.get('/sync', personController.syncPeople);
router.post('/', personController.create);
router.get('/', personController.getAll);
router.get('/:id', personController.getById);
router.put('/:id', personController.update);
router.delete('/:id', personController.delete);
router.get('/:id/ships', personController.getPersonShips);


export default router;
