// server/keepAlive.js
import axios from "axios";

const keepAlive = (url) => {
  const interval = 14 * 60 * 1000; 

  setInterval(() => {
    axios.get(url)
      .then(() => console.log(`Self-ping to ${url} successful.`))
      .catch((err) => console.error(`Self-ping to ${url} failed:`, err.message));
  }, interval);
};

export default keepAlive;