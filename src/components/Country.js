import React from "react";

const Country = (props) => {
  const { name, population, area, region, flags } = props.country;
  return (
    <div className="flex flex-col justify-between rounded-lg p-2 shadow drop-shadow-md w-full">
      <div>
        <h1 className="text-center font-bold text-xl my-2">{name.common}</h1>
        <img className="rounded w-full" src={flags.png} alt="" />
      </div>

      <div className="m-2 flex flex-col items-center">
        <h1 className="text-lg">Population: {population}</h1>
        <h1 className="text-lg">Area: {area}</h1>
        <h1 className="text-lg">Region: {region}</h1>
      </div>
    </div>
  );
};

export default Country;
