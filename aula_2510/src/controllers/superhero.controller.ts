import { Request, Response } from 'express';
import Superhero from '../models/superhero.model';

export const createSuperhero = async (req: Request, res: Response) => {
  try {
    const superhero = new Superhero(req.body);
    const savedSuperhero = await superhero.save();
    res.status(201).json(savedSuperhero);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar o super-herói.' });
  }
};

export const getSuperheroes = async (req: Request, res: Response) => {
  try {
    const superheroes = await Superhero.find();
    res.status(200).json(superheroes);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar super-heróis.' });
  }
};

export const getSuperheroById = async (req: Request, res: Response) => {
  try {
    const superhero = await Superhero.findById(req.params.id);
    if (!superhero) {
      res.status(404).json({ error: 'Super-herói não encontrado.' });
    } else {
      res.status(200).json(superhero);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao buscar o super-herói.' });
  }
};

export const updateSuperhero = async (req: Request, res: Response) => {
  try {
    const superhero = await Superhero.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!superhero) {
      res.status(404).json({ error: 'Super-herói não encontrado.' });
    } else {
      res.status(200).json(superhero);
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao atualizar o super-herói.' });
  }
};

export const deleteSuperhero = async (req: Request, res: Response) => {
  try {
    const superhero = await Superhero.findByIdAndDelete(req.params.id);
    if (!superhero) {
      res.status(404).json({ error: 'Super-herói não encontrado.' });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    res.status(500).json({ error: 'Erro ao excluir o super-herói.' });
  }
};
