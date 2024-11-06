import { useState } from "react";
import "./App.css";

const App = () => {
  const [team, setTeam] = useState([]);
  const [money, setMoney] = useState(100);
  const [zombieFighters, setZombieFighters] = useState([
    {
      name: "Survivor",
      price: 12,
      strength: 6,
      agility: 4,
      img: "https://pics.craiyon.com/2024-09-20/OjFybAGmT86VfpHGt_QF7Q.webp",
    },
    {
      name: "Scavenger",
      price: 10,
      strength: 5,
      agility: 5,
      img: "https://pics.craiyon.com/2024-09-21/OquJPC0BQCW5QM3U_NcoMA.webp",
    },
    {
      name: "Shadow",
      price: 18,
      strength: 7,
      agility: 8,
      img: "https://pics.craiyon.com/2024-09-22/X2ZzayELSVe9rPDlTjZy8Q.webp",
    },
    {
      name: "Tracker",
      price: 14,
      strength: 7,
      agility: 6,
      img: "https://pics.craiyon.com/2024-09-18/rpAlRCBEQteFndpqK8i1pg.webp",
    },
    {
      name: "Sharpshooter",
      price: 20,
      strength: 6,
      agility: 8,
      img: "https://pics.craiyon.com/2024-09-08/BXIcTewISi-wIZZQQztziA.webp",
    },
    {
      name: "Medic",
      price: 15,
      strength: 5,
      agility: 7,
      img: "https://pics.craiyon.com/2024-09-16/G134D8LqQje0ayX54zr54A.webp",
    },
    {
      name: "Engineer",
      price: 16,
      strength: 6,
      agility: 5,
      img: "https://media.craiyon.com/2024-09-21/gGQYWWg9QJ6CO8yTTMkfww.webp",
    },
    {
      name: "Brawler",
      price: 11,
      strength: 8,
      agility: 3,
      img: "https://pics.craiyon.com/2024-09-06/FJky5VCVStysUPhjxumivA.webp",
    },
    {
      name: "Infiltrator",
      price: 17,
      strength: 5,
      agility: 9,
      img: "https://pics.craiyon.com/2024-09-10/y6PFm46yQsuVySZR4epIyw.webp",
    },
    {
      name: "Leader",
      price: 22,
      strength: 7,
      agility: 6,
      img: "https://media.craiyon.com/2024-09-24/NHeFd6GATvC1a7SikvCrbQ.webp",
    },
  ]);
  //---------------------------------------------------------------------\\

  const handleFighter = (addingFighter) => {
    //console.log(addingFighter);
    if (addingFighter.price > money) {
      console.log("Not enough money");
    } else {
      const newTeamArray = [...team, addingFighter];
      setTeam(newTeamArray);
      const updateMoney = money - addingFighter.price;
      setMoney(updateMoney);
    }
  };

  return (
    <div>
      <h1>Zombie Fighters!</h1>

      <h3><span>Money: </span>{money}</h3>
      <h3><span>Team Strenght: </span></h3>
      <h3><span>Team Agility: </span></h3>
      <h3>Team: </h3>
    {team.length === 0 ? (
      <p>Pick some team members!</p>
    ) : (
      <ul> 
        {team.map((fighter, index) => (
          <li key={index}>
          <img src={fighter.img} alt={fighter.name} />
            <p>{fighter.name}</p>
            <p>Price: {fighter.price}</p>
            <p>Strength: {fighter.strength}</p>
            <p>Agility: {fighter.agility}</p>
            <button onClick={() => handleRemoveFighter(index)}>Remove</button>
          </li>
        ))}
      </ul>
    )}

      <h3>Fighters</h3>
      <ul>
        {zombieFighters.map((fighter, index) => (
          <li key={index}>
            <img src={fighter.img} alt={fighter.name} />
            <p>{fighter.name} </p>
            <p>Price: {fighter.price} </p>
            <p>Strength: {fighter.strength} </p>
            <p>Agility: {fighter.agility} </p>
            <button onClick={() => handleFighter(fighter)}>Add</button>
          </li>
        ))}
      </ul>
      </div>
  );
};



export default App;
