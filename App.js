import React from "react";
const api = {
  key: "28802535343b2c4cb27043e536734e4c",
  base: "https://api.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="app">
      <main>
        <div className="search">
          <input type="text" className="searchBar" placeholder="Search.." />
          <button type="button" className="button">
            Search
          </button>
        </div>
      </main>

      <div className="locationResults">
        <div className="location"></div>
        <div className="date"></div>
      </div>
    </div>
  );
}
export default App;
