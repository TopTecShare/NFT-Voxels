import { ChainId } from "@usedapp/core";
import { formatUnits } from "@ethersproject/units";
import { intervalToDuration } from "date-fns";

// network should be mainnet or rinkeby
export function infuraUrl(network) {
  return `https://${
    network === ChainId.Mainnet ? "mainnet" : "rinkeby"
  }.infura.io/v3/${process.env.REACT_APP_INFURA_ID}`;
}

export function formatAmount(value, decimals = 18, fractionDigits = 2) {
  return Number(formatUnits(value || "0", decimals)).toLocaleString("en-US", {
    maximumFractionDigits: fractionDigits,
  });
}

export const convertToDuration = (startDate, endDate) => {
  const formatNumber = (number) =>
    !number || number < 10 ? `0${number}` : number;
  const { days, hours, minutes, seconds } = intervalToDuration({
    start: new Date(startDate * 1000),
    end: new Date(endDate * 1000),
  });

  return {
    days: formatNumber(days),
    hours: formatNumber(hours),
    minutes: formatNumber(minutes),
    seconds: formatNumber(seconds),
  };
};

export const formatError = (msg, comment = "") => {
  switch (msg) {
    case "execution reverted: Not mint open yet":
      return "Public minting is not started!";
    case "execution reverted: Pausable: paused":
      return `The feature is paused! Please ask to the administrator.`;
    case "execution reverted: ERC721: transfer caller is not owner nor approved":
      return `The transfer caller is not owner nor approved!`;
    case "execution reverted: Burn timestamp not set":
      return `Burning start time is not set yet!`;
    default:
      return msg;
  }
};

const zeroPad = (num, places) => String(num).padStart(places, "0");

export const formatCubeId = (num) => {
  return `#${zeroPad(num, 4)}`;
};
