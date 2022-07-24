import axios from "axios";
import "chart.js/auto";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

const ChartLine = ({ datas }) => {
  const [Datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchSummary = async () => {
      const { data } = await axios.get(`https://covid19.mathdro.id/api/daily`);
      const slicesArray = data.slice(0, 35);

      setDatas(slicesArray);
    };

    fetchSummary();
  }, []);

  return (
    <div className="w-[70%] xs:w-[90%] mx-auto py-8">
      <Line
        data={{
          labels: Datas.map((item) => item.reportDate),
          datasets: [
            {
              label: "Infected",
              backgroundColor: ["#7d5fff"],
              borderColor: ["#7d5fff"],
              data: [Datas.reduce((a, b) => a + b.confirmed.total, 0)],
            },
            {
              label: "Deaths",
              backgroundColor: ["#eb4d4b"],
              borderColor: ["#eb4d4b"],
              data: [Datas.reduce((a, b) => a + b.deaths.total, 0)],
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartLine;
