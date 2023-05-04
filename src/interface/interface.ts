export type CountryProps = {
  // Nome
  name: {
    common: string;
  };

  // População
  population: number;

  // Capital
  capital: string[];

  // Continente
  continents: string[];

  // Moeda 
  currencies: {
    name: string;
  }

  // Fronteiras
  borders: string[];

  // Região
  region: string;

  // Bandeira 
  flags: {
    png: string;
    svg: string;
  };

  // Brasão
  coatOfArms: {
    png: string;
    svg: string;
  }

  independent: boolean;
  landlocked: boolean;

  // Maps
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  }
};
