import axios from "axios";
const instance = axios.create({
  baseURL: "https://myvan-12eb8.firebaseio.com/"
});
export default instance;
