import React, { useState } from "react";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [hot, setHot] = useState("00.00");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=d885aa1d783fd13a55050afeef620fcb`
    )
      .then((response) => response.json())
      .then((data) => {
        const temperature = data.main.temp;
        console.log(temperature);
        const kelvin = 273.15;
        setHot((temperature - kelvin).toFixed(2));
      });
  };
  return (
    <div className=" bg-sky-300 h-screen  grid place-items-center">
      <div className="bg-white p-20 rounded-3xl ">
        <p className="text-5xl font-bold mb-20"> Places And Temperatures</p>
        <form className="flex justify-between mb-20" onSubmit={handleSubmit}>
          <input
            className="p-5 bg-slate-200 rounded-lg placeholder-gray-700 text-3xl "
            type="text"
            placeholder="Place"
            value={inputValue}
            onChange={handleChange}
          />
          <input
            className="text-3xl  bg-slate-200 border p-5 rounded-xl"
            type="submit"
          />
        </form>
        <p className="text-4xl font-medium">
          Present Temperature is {hot} Degrees
        </p>
      </div>
    </div>
  );
}

export default App;
