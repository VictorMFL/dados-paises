import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

// Interface
import { CountryProps } from "../interface/interface";

// Url da API
import { apiUrl } from "../api/Api";
import Loading from "./Carregamento/Loading";

type StateProps = {
  data: CountryProps[];
  setData: React.Dispatch<React.SetStateAction<CountryProps[]>>;
};

const Home = ({data, setData}: StateProps) => {
  const [loading, setLoading] = React.useState(true)

  async function get() {
    try {
      const response = await axios.get<CountryProps[]>(apiUrl);
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

  if(loading) return <Loading />
  if (data.length === 0) return null;
  return (
    <div className="grid grid-cols-3 place-items-center tablet:grid-cols-2 telasP:grid-cols-1">
      {data.map((pais) => (
        <Link
          to={`${pais.name.common}`}
          key={pais.name.common}
          className="h-64 my-8 flex justify-center items-center flex-col celular:h-44 celular:my-6"
          onClick={() => window.localStorage.setItem("País", pais.name.common)}
        >
          <img
            src={pais.flags.png}
            alt={`Bandeira de ${pais.name.common}`}
            className="h-44 w-72 rounded-md celular:w-52 celular:h-36"
            id={String(pais.population)}
          />
          <h3 className="text-2xl">{pais.name.common}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Home;
