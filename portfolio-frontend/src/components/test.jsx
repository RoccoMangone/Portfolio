import React from "react"

const getPoke = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon/')
  const data = await res.json()
}

const Test = () => {
  return (
    <div>
      <button onClick={getPoke}>Hello</button>
    </div>
  )
};

export default Test;
