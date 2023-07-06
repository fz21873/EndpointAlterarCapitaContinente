export enum CONTINENTS {
   AFRICA = "Africa",
   AMERICA = "America",
   ASIA = "Asia",
   EUROPE = "Europa",
   OCEANIA = "Oceania"
}

export type country = {
   id: number,
   name: string,
   capital: string,
   continent: CONTINENTS
}