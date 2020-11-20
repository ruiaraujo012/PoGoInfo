import oneRaid from "assets/images/oneRaid.svg";
import twoRaid from "assets/images/twoRaid.svg";
import threeRaid from "assets/images/threeRaid.svg";
import fourRaid from "assets/images/fourRaid.svg";
import fiveRaid from "assets/images/fiveRaid.svg";
import megaRaid from "assets/images/megaRaid.svg";

export const selectRaidTierImage = (tier) => {
  let raidImage;

  switch (tier) {
    case "1":
      raidImage = oneRaid;
      break;

    case "2":
      raidImage = twoRaid;
      break;

    case "3":
      raidImage = threeRaid;
      break;

    case "4":
      raidImage = fourRaid;
      break;

    case "5":
      raidImage = fiveRaid;
      break;

    case "mega":
      raidImage = megaRaid;
      break;

    default:
      raidImage = oneRaid;
      break;
  }

  return raidImage;
};

export default {
  selectRaidTierImage,
};
