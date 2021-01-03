export class Cour {
  id: number;
  nomCours: string;
  details: string;

  constructor(id=1, nomCours='', details='') {
    this.id = id;
    this.nomCours = nomCours;
    this.details = details;
  }
}
