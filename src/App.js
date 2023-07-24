import React, {useState} from "react";
import axios from "axios";

function App() {
const [data, setData] = useState({})
const [location, setLocation] = useState("")

   const url= "https:api.openweathermap.org/data/2.5/weather?q=${location}&APPID=95ae4434ef59f9fe055f859ecf1a59ea";

   const searchLocation = (event) => {
    if (event.key === "Enter"){
    axios.get(url).then((response) => {
      setData(response.data)
      console.log(response.data)
    })
   }
  }

  return (
    <div className="app">
      
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        onKeyPress={searchLocation}
        placeholder="Enter Location"
        type="text"/>
      </div>

<div className="container">
  <div className="top">
    <div className="location">
      <p>London</p>
    </div>
    <div className="temp">
      <h1>1° F</h1>
    </div>
    <div className="description">
      <p>Clouds</p>
    </div>

  </div>

    <div className="bottom">
      <div className="feels">
        <p className="bold">2° C</p>
        <p>Feels Like</p>
        </div>
        <div className="humidity">
          <p className="bold">56%</p>
          <p>Humidity</p>
          </div>
          <div className="winds">
            <p className="bold">30 MPH</p>
            <p>Wind Speeds</p>
          </div>
          
    </div>
</div>
    </div>
  );
}

export default App;
