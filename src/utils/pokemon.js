import Egg from "assets/images/egg.png";
import Evolution from "assets/images/up-arrow.png";
import Raid from "assets/images/star.png";
import Research from "assets/images/pokestop.png";
import Wild from "assets/images/pawprints.png";

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

export const foundOnImages = (foundOn) => {
  let images = [];
  foundOn.forEach((name) => {
    switch (name) {
      case "egg":
        images.push(Egg);
        break;

      case "evolution":
        images.push(Evolution);
        break;

      case "raid":
        images.push(Raid);
        break;

      case "research":
        images.push(Research);
        break;

      case "wild":
        images.push(Wild);
        break;

      default:
        break;
    }
  });

  return images;
};

export default {
  generateImageURL,
  foundOnImages,
};
