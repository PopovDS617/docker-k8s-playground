import { Schema, model } from 'mongoose';

const favoriteSchema = new Schema({
  type: String,
  name: String,
  url: String,
});

export const Favorite = model('Favorite', favoriteSchema);
