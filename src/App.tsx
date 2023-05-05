import React from "react";

import Home from "./components/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="bg-slate-700 text-white">
      <Header />
      <Home />
    </div>
  );
};

export default App;
