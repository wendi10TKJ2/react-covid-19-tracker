import { useEffect, useState } from "react";
import axios from "axios";

const FormItem = ({ options, onValue, ...rest }) => {
  const [countrieds, setCountrieds] = useState([]);

  useEffect(() => {
    if (!options) return;
    const fetchCountries = async () => {
      const { data } = await axios.get(options);
      const { countries } = data;
      setCountrieds(countries);
    };

    fetchCountries();
  }, [options]);

  return (
    <div className="form-control mt-10 xs:w-full xl:w-[50%] mx-auto xl:px-0 xs:px-5">
      <select
        {...rest}
        onChange={onValue}
        className="w-full py-1 outline-none px-2 rounded-md bg-transparent font-medium bg-gray-300 border border-gray-300"
      >
        <option className="text-gray-800" value="Global">
          Global
        </option>
        {countrieds.map((country, idx) => (
          <option className="text-gray-800" key={idx} value={country.name}>
            {country?.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormItem;
