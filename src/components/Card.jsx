import React from "react";
import ComponentsModal from "./ComponentsModal";

const Card = ({ data, i }) => {
  return (
    <>
      <div
        key={i}
        className="border border-slate-300 rounded-lg shadow-2xl p-3 md:p-4"
      >
        <img
          src={data.image.small}
          alt={data.title}
          className="rounded-lg object-cover w-full h-40 md:h-48 lg:h-56"
        />
        <div className="p-2 md:p-3">
          <p className="text-xs md:text-sm text-gray-400">
            {data.isoDate.slice(0, 10)}
          </p>
          <h2 className="font-bold text-lg md:text-xl mt-2">{data.title}</h2>
          <p className="mt-2 text-sm md:text-base">{data.contentSnippet}</p>
          <ComponentsModal data={data} />
        </div>
      </div>
    </>
  );
};

export default Card;
