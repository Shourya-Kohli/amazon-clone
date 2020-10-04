import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-10526/us-central1/api", //(CLOUD function url)
});
export default instance;
