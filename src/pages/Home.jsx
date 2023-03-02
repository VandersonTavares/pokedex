import React from "react";
import axios from "axios";

import { Card } from "../components/Card";

import { Link } from "react-router-dom";

import { useState, useEffect } from "react";

export const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon/?limit=100&offset=0")
      .then((response) => {
        setList(response.data.results);
        console.log(response.data.results);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center content-center">
        {list.map((pokemon) => (
          <Link key={pokemon.name} to={'/pokemon'}>
            <Card  name={pokemon.name} url={pokemon.url} />
          </Link>
        ))}
      </div>
    </>
  );
};
