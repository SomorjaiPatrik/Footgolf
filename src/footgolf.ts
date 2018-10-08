export class Footgolf {
  public Név: string;
  public Kategória: string;
  public Egyesület: string;
  private Pontok: number[] = [];

  public constructor(footgolf: string) {
    let m: string[] = footgolf.split(";");

    this.Név = m[0];
    this.Kategória = m[1];
    this.Egyesület = m[2];
    this.Pontok = [];
    for (let i = 3; i < m.length; i++) {
      this.Pontok.push(parseInt(m[i]));
    }
  }

  public get Pontszam() {
    let osszPont: number = 0;
    let szamok: number[] = this.Pontok;
    let nemszamol: number[] = [];

    for (let i = 0; i < 2; i++) {
      let mini: number = 0;
      for (let j = 0; j < szamok.length; j++) {
        if (szamok[j] < szamok[mini]) mini = szamok[i];
      }
      if (szamok[mini] > 0) osszPont += 10;

      szamok.splice(mini, 1);
    }

    for (let i = 0; i < szamok.length; i++) {
      osszPont += szamok[i];
    }
    return osszPont;
  }
}
