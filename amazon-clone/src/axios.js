import axios from "axios";

const instance = axios.create({
  baseURL: "...", //(CLOUD function url)
});
export default instance;
