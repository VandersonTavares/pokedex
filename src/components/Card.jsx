import { useEffect, useState } from "react";

import axios from "axios";
import Tilt from "react-parallax-tilt";

export const Card = ({ name, url }) => {
  const [details, setDetails] = useState([]);
  const [types, setTypes] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setDetails(response.data);
        // console.log(response.data);
        setTypes(response.data.types);
        // console.log(response.data.types);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, [url]);

  const BASE_URL =
    "https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/";

  const pokemonTypes = [
    { valor: "normal", cor: "#A8A77A" },
    { valor: "fire", cor: "#EE8130" },
    { valor: "water", cor: "#6390F0" },
    { valor: "electric", cor: "#F7D02C" },
    { valor: "grass", cor: "#7AC74C" },
    { valor: "ice", cor: "#96D9D6" },
    { valor: "fighting", cor: "#C22E28" },
    { valor: "poison", cor: "#A33EA1" },
    { valor: "ground", cor: "#E2BF65" },
    { valor: "flying", cor: "#A98FF3" },
    { valor: "psychic", cor: "#F95587" },
    { valor: "bug", cor: "#A6B91A" },
    { valor: "rock", cor: "#B6A136" },
    { valor: "ghost", cor: "#735797" },
    { valor: "dragon", cor: "#6F35FC" },
    { valor: "dark", cor: "#705746" },
    { valor: "steel", cor: "#B7B7CE" },
    { valor: "fairy", cor: "#D685AD" },
  ];

  function obterCor(valor) {
    const cor = pokemonTypes.find((c) => c.valor === valor);
    return cor ? cor.cor : "gray";
  }
  const valor = types[0]?.type?.name || types[1]?.type?.name;
  const cor = obterCor(valor);

  return (
    <Tilt
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={800}
      transitionSpeed={1500}
      glareEnable={true}
      glareMaxOpacity={0.2}
      scale={1.1}
      glarePosition="all"
    >
      <div
        className="card-container h-[80px] w-[220px] rounded-[15px] m-[10px] mb-[110px] cursor-default"
        style={{ backgroundColor: cor }}
      >
        <div className="card flex flex-col text-center border rounded-[15px]">
          <div className="image flex justify-center m-[5px]">
            <img
              className="h-[120px] w-[120px]"
              src={
                BASE_URL +
                details.id?.toLocaleString("pt-BR", {
                  minimumIntegerDigits: 3,
                  useGrouping: false,
                }) +
                ".png"
              }
              alt="pokemon-images"
            />
          </div>
          <div className="infos">
            <span
              className="font-bold text-[20px] capitalize"
              style={{ color: cor }}
            >
              {details.id}. {name}
            </span>
          </div>
          <div className="types">
            <span className="capitalize italic" style={{ color: cor }}>
              {types[0]?.type?.name} {types[1]?.type?.name}
            </span>
          </div>
        </div>
      </div>
    </Tilt>
  );
};
