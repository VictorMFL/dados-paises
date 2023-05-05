import React from "react";
import axios from "axios";

import { CountryProps } from "../interface/interface";
import { apiUrl } from "../api/Api";

const Pais = () => {
  const [data, setData] = React.useState<CountryProps[]>();

  async function get() {
    const paisUrl = window.localStorage.getItem("País");
    try {
      const response = await axios.get<CountryProps[]>(
        `https://restcountries.com/v3.1/name/${paisUrl}`
      );
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  React.useEffect(() => {
    get();
    window.localStorage.removeItem("pais");
  }, []);

  function capital(capital: string[]) {
    return capital.map((cap) => <p key={cap}>{cap}</p>);
  }

  function borders(front: string[]) {
    return front.map((fronteira) => <p key={fronteira}>{fronteira}</p>);
  }

  function continents(cont: string[]) {
    return cont.map((continente) => <p key={continente}>{continente}</p>);
  }

  return <div>pais</div>;
};

export default Pais;
