import express from 'express';
import personRoutes from './personRoutes.js';
import starshipRoutes from "./starshipRoutes.js"

const router = express.Router();

router.use('/persons', personRoutes);
router.use('/starship', starshipRoutes);

export default router;
