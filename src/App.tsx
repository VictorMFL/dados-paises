import React from "react";
import axios from "axios";

// Interface
import { CountryProps } from "./interface/interface";

// Url da API
import { apiUrl } from "./api/Api";

const App = () => {
  const [data, setData] = React.useState<CountryProps[]>([]);

  async function get() {
    try {
      const response = await axios.get<CountryProps[]>(apiUrl);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function capital(capital: string[]) {
    return capital.map((cap) => <p key={cap}>{cap}</p>)
  }

  function borders(front: string[]) {
    return front.map((fronteira) => <p key={fronteira}>{fronteira}</p>);
  }

  function continents(cont: string[]) {
    return cont.map((continente) => <p key={continente}>{continente}</p>)
  }

  React.useEffect(() => {
    get();
  }, []);

  if (data.length === 0) return null;
  return (
    <div>
      {data.map((pais) => (
        <div key={pais.name.common}>
          <img src={pais.flags.png} alt={`Bandeira de ${pais.name.common}`} />
          <h1>{pais.name.common}</h1>
          <p className='bg-slate-400'>Capital:</p>
          {pais.capital && capital(pais.capital)}
          <p>Região: {pais.region} </p>
          <p>Continente: {pais.continents && continents(pais.continents)}</p>
          {pais.currencies && pais.currencies.name}
          <p>População: {pais.population} </p>
          <div>
            <h3>Fronteiras:</h3>
            <div>{pais.borders && borders(pais.borders)}</div>
          </div>
          {pais.independent && <p>Esse país é independente.</p>}
        </div>
      ))}
    </div>
  );
};

export default App;
