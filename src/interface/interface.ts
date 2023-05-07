export type CountryProps = {
  // Nome
  name: {
    common: string;
  };

  // População
  population: number;

  // Área
  area: number;

  // Capital
  capital: string[];

  // Continente
  continents: string[];

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
  };

  // Maps
  maps: {
    googleMaps: string;
    openStreetMaps: string;
  };

  // Moeda
  currencies: {
    name: string;
  };
};