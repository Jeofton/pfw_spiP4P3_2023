import { Router } from 'express';
import {
  createSuperhero,
  getSuperheroes,
  getSuperheroById,
  updateSuperhero,
  deleteSuperhero,
} from '../controllers/superhero.controller';

const router = Router();

router.post('/superheroes', createSuperhero);
router.get('/superheroes', getSuperheroes);
router.get('/superheroes/:id', getSuperheroById);
router.put('/superheroes/:id', updateSuperhero);
router.delete('/superheroes/:id', deleteSuperhero);

export default router;
