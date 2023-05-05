import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

// Interface
import { CountryProps } from "../interface/interface";

// Url da API
import { apiUrl } from "../api/Api";

const Home = () => {
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

  React.useEffect(() => {
    get();
  }, []);

  if (data.length === 0) return null;
  return (
    <div className="grid grid-cols-3 place-items-center">
      {data.map((pais) => (
        <Link
          to={`${pais.name.common}`}
          key={pais.name.common}
          className="h-64 my-8 flex justify-center items-center flex-col"
          onClick={() => window.localStorage.setItem("País", pais.name.common)}
        >
          <img
            src={pais.flags.png}
            alt={`Bandeira de ${pais.name.common}`}
            className="h-44 w-72 rounded-md"
          />
          <h3 className="text-2xl">{pais.name.common}</h3>
        </Link>
      ))}
    </div>
  );
};

export default Home;