import "chart.js/auto";
import { Bar } from "react-chartjs-2";

const ChartBar = ({ datas }) => {
  if (!datas) return;

  const infected = datas?.confirmed.value;
  const recovered = datas?.recovered.value;
  const deaths = datas?.deaths.value;

  return (
    <div className="w-[65%] xs:w-[90%] py-8 mx-auto">
      <Bar
        data={{
          labels: ["Infected", "Recovered", "Deaths"],
          datasets: [
            {
              label: "Covid-19 Data",
              backgroundColor: ["#7d5fff", "#0be881", "#f53b57"],
              data: [infected, recovered, deaths],
            },
          ],
        }}
      />
    </div>
  );
};

export default ChartBar;
