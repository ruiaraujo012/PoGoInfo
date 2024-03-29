import axios from "axios";

const proxyURL = "https://api.allorigins.win/raw?url=https://pogoapi.net";
let url = "https://pogoapi.net";

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === "development") url = proxyURL;

const pogoapi = axios.create({
  baseURL: url,
});

export default pogoapi;
