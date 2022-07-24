import axios from "axios";
import logo from "./assets/logo.png";
import { useEffect, useState } from "react";
import { Card, FormItem, ChartLine, ChartBar } from "./components";

function App() {
  const [cases, setCases] = useState({});
  const [country, setCountry] = useState("Global");
  const [dataChart, setDataChart] = useState(null);

  const fetchCovid = async () => {
    if (country === "Global") {
      const getData = await axios.get(`https://covid19.mathdro.id/api`);
      const { data } = getData;

      return setCases(data);
    }

    const { data } = await axios.get(
      `https://covid19.mathdro.id/api/countries/${country}`
    );

    setDataChart(data);
    setCases(data);
  };

  useEffect(() => {
    fetchCovid();
  }, [country]);

  const handleChange = async (e) => {
    setCountry(e.target.value);
  };

  return (
    <div className="App min-h-screen bg-gray-100 flex justify-center items-center flex-col py-7">
      <img className="xs:w-[140px] xl:w-[180px]" src={logo} alt="logo" />
      <div className="xl:w-[68%] xl:px-0 xs:w-[98%] xs:px-4 mx-auto mt-10 grid xs:grid-cols-1 xl:grid-cols-3  gap-4">
        <Card
          title="Infected"
          date={cases?.lastUpdate}
          total={cases?.confirmed?.value}
          subTitle="Number of active cases of COVID-19"
        />
        <Card
          title="Deaths"
          date={cases?.lastUpdate}
          total={cases?.deaths?.value}
          subTitle="Number of recoveries of COVID-19"
        />
        <Card
          title="Recovered"
          date={cases?.lastUpdate}
          total={cases?.recovered?.value}
          subTitle="Number of deaths from COVID-19"
        />
      </div>
      <FormItem
        value={country}
        onValue={handleChange}
        options={cases?.countries}
      />
      {country === "Global" ? (
        <ChartLine country={country} />
      ) : (
        <ChartBar datas={dataChart} />
      )}
    </div>
  );
}

export default App;
