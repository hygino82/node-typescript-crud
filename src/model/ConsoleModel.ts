import { v4 as uuidv4 } from "uuid";

export class ConsoleModel {
  id: string;
  name: string;
  imageUrl: string;
  releaseDate: Date;

  constructor(name: string, imageUrl: string, releaseDate: Date) {
    this.id = uuidv4();
    this.name = name;
    this.imageUrl = imageUrl;
    this.releaseDate = releaseDate;
  }
}
