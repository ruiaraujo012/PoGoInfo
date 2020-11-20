import clearImage from "assets/images/weather/clear.svg";
import cloudyImage from "assets/images/weather/cloudy.svg";
import fogImage from "assets/images/weather/fog.svg";
import partlyCloudyImage from "assets/images/weather/partlyCloudy.svg";
import rainyImage from "assets/images/weather/rainy.svg";
import snowImage from "assets/images/weather/snow.svg";
import windyImage from "assets/images/weather/windy.svg";

export default {
  Clear: {
    image: clearImage,
  },
  Sunny: {
    image: clearImage,
  },
  Rainy: {
    image: rainyImage,
  },
  "Partly Cloudy": {
    image: partlyCloudyImage,
  },
  Overcast: {
    image: cloudyImage,
  },
  Cloudy: {
    image: cloudyImage,
  },
  Windy: {
    image: windyImage,
  },
  Snow: {
    image: snowImage,
  },
  Fog: {
    image: fogImage,
  },
};
