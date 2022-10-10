import React, { useEffect, useContext } from "react";
import { dataContext } from "../utils/fetchContext";
import { spinner } from "../assets/charts";
import { Line } from "@ant-design/plots";
import SideBar from "../components/SideBar";

function Dashboard() {
  const { data, limit, setLimit } = useContext(dataContext);

  useEffect(() => {
    function timeRun() {
      var today = new Date();
      var h = today.getHours();
      var m = today.getMinutes();
      m = checkTime(m);
      h = checkTime(h);
      var t = setTimeout(timeRun, 500);
      return `${h}:${m}`;
    }
    function run() {
      data.data &&
        data.data.map((data, key) => {
          if (data.time === timeRun()) {
            setLimit(data.count);
          }
        });
    }
    run();
  }, [data.data, limit, setLimit]);

  function checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }

  const handlePlot = (field_Y) => {
    const config = {
      data: data.data ? data.data.slice(0, 1 + limit) : [" "],
      padding: "auto",
      xField: "time",
      yField: field_Y,
      xAxis: {
        tickCount: 24,
      },
    };
    return config;
  };

  return (
    <div>
      <SideBar/>
      <div className="relative ml-[16rem]">
        <div className="flex-1 relative h-screen p-10 overflow-y-scroll overflow-x-hidden bg-gray-400">
          <h1 className="grid place-content-center text-2xl font-medium text-white">
            DASHBOARD
          </h1>
          <div className="mx-auto">
            <div className="flex flex-wrap mt-5">
              <div className="w-full xl:w-6/12 px-2 mb-4">
                <div className="bg-red-100 p-4 rounded-lg shadow-xl">
                  {data.data ? (
                    <div>
                      <span className="flex items-center justify-center font-medium text-lg">
                        Duration
                      </span>
                      <Line
                        {...handlePlot("duration_mean")}
                        className="max-h-[250px] p-2"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-9">
                      <img
                        className="rounded-md border-blue-400 border-2 p-2"
                        src={spinner}
                        alt="spinner"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full xl:w-6/12 px-2 mb-4">
                <div className="bg-red-100 p-4 rounded-lg shadow-xl">
                  {data.data ? (
                    <div>
                      <span className="flex items-center justify-center font-medium text-lg">
                        Duration CV
                      </span>
                      <Line
                        {...handlePlot("duration_cv")}
                        className="max-h-[250px] p-2"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-9">
                      <img
                        className="rounded-md border-blue-400 border-2 p-2"
                        src={spinner}
                        alt="spinner"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full xl:w-6/12 px-2 mb-4">
                <div className="bg-red-100 p-4 rounded-lg shadow-xl">
                  {data.data ? (
                    <div>
                      <span className="flex items-center justify-center font-medium text-lg">
                        Coin
                      </span>
                      <Line {...handlePlot('mean_coin')} className="max-h-[250px] p-2" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-9">
                      <img
                        className="rounded-md border-blue-400 border-2 p-2"
                        src={spinner}
                        alt="spinner"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full xl:w-6/12 px-2 mb-4">
                <div className="bg-red-100 p-4 rounded-lg shadow-xl">
                  {data.data ? (
                    <div>
                      <span className="flex items-center justify-center font-medium text-lg">
                        Last Coin
                      </span>
                      <Line {...handlePlot('last_coin')} className="max-h-[250px] p-2" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-9">
                      <img
                        className="rounded-md border-blue-400 border-2 p-2"
                        src={spinner}
                        alt="spinner"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full xl:w-6/12 px-2 mb-4">
                <div className="bg-red-100 p-4 rounded-lg shadow-xl">
                  {data.data ? (
                    <div>
                      <span className="flex items-center justify-center font-medium text-lg">
                        Total Revenue
                      </span>
                      <Line {...handlePlot('sum_revenue')} className="max-h-[250px] p-2" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-9">
                      <img
                        className="rounded-md border-blue-400 border-2 p-2"
                        src={spinner}
                        alt="spinner"
                      />
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full xl:w-6/12 px-2 mb-4">
                <div className="bg-red-100 p-4 rounded-lg shadow-xl">
                  {data.data ? (
                    <div>
                      <span className="flex items-center justify-center font-medium text-lg">
                        No rewarded Impression
                      </span>
                      <Line {...handlePlot('no_rewarded_impression')} className="max-h-[250px] p-2" />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center py-9">
                      <img
                        className="rounded-md border-blue-400 border-2 p-2"
                        src={spinner}
                        alt="spinner"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
