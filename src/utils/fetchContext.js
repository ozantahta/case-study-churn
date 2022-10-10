import React, { createContext, useState, useEffect } from "react";
import axios from "../axios";

export const dataContext = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [datachurn, setChurn] = useState([])
  const [opTime, setOpTime] = useState("");
  const [limit, setLimit] = useState(0);

  useEffect(() => {
    function timeRun() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      m = checkTime(m);
      h = checkTime(h)
      var t = setTimeout(timeRun, 500);
      setOpTime(`${h}:${m}`);
      return `${h}:${m}`;
    }
    async function run() {
      const req = await axios.get("/getData");
      setData(req);
      req.data.map((data, key) => {
        if (data.time === timeRun()) {
          setLimit(data.count);
        }
      });
    }
    async function runChurn(){
      const churnReq = await axios.get("/getPredictions");
      setChurn(churnReq)
    }
    run();
    runChurn();
  }, [opTime]);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  return (
    <dataContext.Provider
      value={{
        data,
        limit,
        setLimit,
        datachurn
      }}
    >
      {children}
    </dataContext.Provider>
  );
}

export default ContextProvider;
