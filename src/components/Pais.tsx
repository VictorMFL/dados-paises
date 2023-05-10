import React from "react";
import axios from "axios";

// Interface
import { CountryProps } from "../interface/interface";

// Icone
import { HiOutlineArrowLeft } from "react-icons/hi";
import { Link } from "react-router-dom";
import Loading from "./Carregamento/Loading";

const Pais = () => {
  const [data, setData] = React.useState<CountryProps[]>();
  const [loading, setLoading] = React.useState(true)

  async function get() {
    const paisUrl = window.localStorage.getItem("País");
    try {
      const response = await axios.get<CountryProps[]>(
        `https://restcountries.com/v3.1/name/${paisUrl}`
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }

  React.useEffect(() => {
    get();
  }, []);

  function capital(capital: string[]) {
    return capital.map((cap) => <p key={cap}>{cap}</p>);
  }

  function borders(front: string[]) {
    return front.map((fronteira) => <p key={fronteira}>{fronteira}</p>);
  }

  function continents(cont: string[]) {
    return cont.map((continente) => (
      <span key={continente}>{continente}.</span>
    ));
  }

  if(loading) return <Loading />
  return (
    <div className="bg-slate-400 min-h-screen">
      <header className="bg-black p-8 flex justify-center items-center text-white relative">
        <Link to="/dados-paises" className="absolute left-8 cursor-pointer">
          <HiOutlineArrowLeft size={32} />
        </Link>
        <p className="text-4xl mb-2">Dados</p>
      </header>
      {data?.map((pais) => (
        <main key={pais.name.common} className="p-8">
          <h1 className="text-4xl text-center my-4 font-bold">
            {pais.name.common}
          </h1>
          <section className="grid grid-cols-2 place-items-center max-h-64">
            <div>
              <p className="text-2xl">Bandeira:</p>
              <img
                src={pais.flags.png}
                alt={`Bandeira de ${pais.name.common}`}
              />
            </div>
            <div>
              <p className="text-2xl">Brasão:</p>
              <img
                src={pais.coatOfArms.png}
                alt={`Brasão de ${pais.name.common}`}
                className="h-56"
              />
            </div>
          </section>

          <section className="grid grid-cols-2 place-items-center mt-8">
            <div>
              <h1 className="text-3xl font-bold">Capital:</h1>
              <h2 className="text-3xl text-center">
                {pais.capital && capital(pais.capital)}
              </h2>
            </div>
            <div>
              <h1 className="text-3xl">Este país faz fronteira com:</h1>
              <div className="flex gap-4 flex-wrap items-center justify-center">
                {pais.borders && borders(pais.borders)}
              </div>
            </div>
          </section>

          <section className="mt-8">
            <p>
              {pais.name.common} é um país com uma população de{" "}
              <em className="font-bold">{pais.population}</em>. Em um espaço de{" "}
              <em className="font-bold">{pais.area}km²</em>
            </p>
            {pais.continents && (
              <p>
                O país está localizado em{" "}
                <em>{pais.continents && continents(pais.continents)}</em>
              </p>
            )}
          </section>
        </main>
      ))}
    </div>
  );
};

export default Pais;
