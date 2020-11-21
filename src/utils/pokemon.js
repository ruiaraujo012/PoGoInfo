export const generateImageURL = (
  pokemonNumber,
  form,
  shiny = false,
  mega = false
) => {
  let url = "https://www.serebii.net/pokemongo/pokemon";

  if (shiny) url += "/shiny";

  url += `/${pokemonNumber}`;

  if (mega) url += "-m";

  switch (form) {
    case "Alola":
      url += "-a";
      break;

    case "X":
      url += "x";
      break;

    case "Y":
      url += "y";
      break;

    default:
      break;
  }

  url += ".png";

  return url;
};

export default {
  generateImageURL,
};
