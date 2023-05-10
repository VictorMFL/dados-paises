import React from "react";

import Home from "./components/Home";
import Header from "./components/Header";
import { CountryProps } from "./interface/interface";

const App = () => {
  const [data, setData] = React.useState<CountryProps[]>([]);

  return (
    <div className="bg-slate-700 text-white">
      <Header data={data} />
      <Home data={data} setData={setData} />
    </div>
  );
};

export default App;
