export interface SuperHero {
  superHeroId: number;
  superHeroName: string;
  alias: string;
  superHeroAge: number;
  publisher: string;
}

const superHeroes: SuperHero[] = [];

export function addSuperHero(superhero: SuperHero): SuperHero{
  superHeroes.push(superhero);
  return superhero;
}

export function getAllSuperHero(): SuperHero[]{
  return superHeroes;
}