export const fillStringStart = (str, size, char = "#") => {
  if (typeof str !== "string" || !(str instanceof String)) str = str.toString();

  return str.padStart(size, char);
};

export default {
  fillStringStart,
};
