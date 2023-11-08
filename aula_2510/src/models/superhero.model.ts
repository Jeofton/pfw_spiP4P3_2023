import { Schema, model, Document } from 'mongoose';

interface Superhero extends Document {
  name: string;
  secretIdentity: string;
  archEnemy: string;
  firstAppearanceYear: number;
}

const SuperheroSchema = new Schema<Superhero>({
  name: { type: String, required: true },
  secretIdentity: { type: String, required: true },
  archEnemy: { type: String, required: true },
  firstAppearanceYear: { type: Number, required: true },
});

export default model<Superhero>('Superhero', SuperheroSchema);
