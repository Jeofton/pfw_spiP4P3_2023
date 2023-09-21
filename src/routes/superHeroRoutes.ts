import express from 'express';
import { addSuperHeroController, getAllSuperHeroController } from '../controllers/superheroController';

const router = express.Router();

router.get('/', getAllSuperHeroController);
router.post('/', addSuperHeroController);


export default router;