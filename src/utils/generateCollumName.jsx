let ultimoTipoRetornado = "";

export default function collumnName() {
  const tiposPokemon = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Flying",
    "Fighting",
    "Poison",
    "Electric",
    "Ground",
    "Rock",
    "Psychic",
    "Ice",
    "Bug",
    "Ghost",
    "Steel",
    "Dragon",
    "Dark",
    "Fairy",
  ];

  let tipoAleatorio;

  do {
    const indiceAleatorio = Math.floor(Math.random() * tiposPokemon.length);
    tipoAleatorio = tiposPokemon[indiceAleatorio];
  } while (tipoAleatorio === ultimoTipoRetornado);

  ultimoTipoRetornado = tipoAleatorio;

  return tipoAleatorio;
}