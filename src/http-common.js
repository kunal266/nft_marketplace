import axios from "axios";

export default axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://8080-turquoise-fox-93ekvffs.ws-us25.gitpod.io/",
  headers: {
    "Content-type": "application/json"
  }
});