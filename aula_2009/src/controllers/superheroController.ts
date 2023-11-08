import { Request, Response } from "express";
import { SuperHero, addSuperHero, getAllSuperHero } from "../models/superHeroModel";

export function addSuperHeroController(request: Request, response: Response): void {
  const newSuperHero: SuperHero = request.body;
  const superHero = addSuperHero(newSuperHero);
  response.status(201).json(superHero);
}

export function getAllSuperHeroController(req: Request, res: Response){
  const superheroes = getAllSuperHero();
  res.json(superheroes);
}