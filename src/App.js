import React, { useState } from "react";
import data from "./data";
import Tours from "./components/tour";

const App = () => {
  const [newarr, setnew] = useState(data);

  function removehandler(id) {
    const newa = newarr.filter((element) => element.id !== id);
    setnew(newa);
  }
  if (newarr.length == 0) {
    return (
      <div className="no-list">
        <h2 className="no-heading">No place found</h2>
        <button className="refresh" onClick={() => setnew(data)}>
          Refresh
        </button>
      </div>
    );
  }

  return (
    <div className="App">
      <h2 className="heading">Plan With Love</h2>
      <Tours className="card" data={newarr} remove={removehandler}></Tours>
    </div>
  );
};

export default App;
