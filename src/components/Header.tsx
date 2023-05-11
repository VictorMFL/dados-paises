import React from "react";

import { GoSearch } from "react-icons/go";

import { CountryProps } from "../interface/interface";

import { Link, useNavigate } from "react-router-dom";

type StateProps = {
  data: CountryProps[];
};

const Header = ({ data }: StateProps) => {
  const [pesquisa, setPesquisa] = React.useState("");

  const navigate = useNavigate();

  function handleChange({ target }: React.ChangeEvent<HTMLInputElement>) {
    setPesquisa(target.value);
  }

  React.useEffect(() => {
    const resPesquisa = document.querySelector(".resPesquisa") as HTMLElement;
    if (pesquisa === "") {
      resPesquisa.style.display = "none";
    } else {
      resPesquisa.style.display = "block";
    }
  }, [pesquisa]);

  const filteredData = data.filter((item) => {
    return item.name.common.toLowerCase().includes(pesquisa.toLowerCase());
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const firstResult = filteredData[0];
    if (firstResult) {
      window.localStorage.setItem("País", firstResult.name.common);
      navigate(`${firstResult.name.common}`);
    }
  }

  return (
    <header className="bg-black p-8 flex justify-center items-center relative tablet:justify-between celular:flex-col">
      <menu className='text-center tablet:text-left celular:text-center celular:mb-6'>
        <h1 className="text-4xl mb-2 tablet:text-2xl tablet:mb-0">Países</h1>
        <p className="text-sm">Descubra algumas curiosidades de Países</p>
      </menu>
      <form className="absolute right-8 text-black celular:relative celular:w-full celular:flex celular:items-center celular:justify-center celular:left-0" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquisa"
          value={pesquisa}
          onChange={handleChange}
          className="p-2 outline-none rounded-md celular:w-full"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer celular:right-4"
        >
          <GoSearch color="#000000" size={24} />
        </button>

        <div className="absolute top-16 bg-roxo-escuro rounded-lg z-30 w-full text-center bg-slate-100 resPesquisa">
          {pesquisa !== "" &&
            filteredData.map((item) => {
              return (
                <div
                  key={item.population}
                  className="p-2 hover:bg-slate-500 hover:rounded-lg"
                >
                  <Link
                    to={`${item.name.common}`}
                    className="hover:underline"
                    onClick={() =>
                      window.localStorage.setItem("País", item.name.common)
                    }
                  >
                    {item.name.common}
                  </Link>
                </div>
              );
            })}
        </div>
      </form>
    </header>
  );
};

export default Header;
