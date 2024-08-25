import React from "react";
import CardContainer from "./card";

function CardBox({ data }) {
   
  return (
    <div className="max-w-screen-lg mx-auto py-20">
      <div className="flex justify-center sm:gap-6 flex-wrap gap-2">
        {data.map(({ image, name, price, status, id }) => (
          <CardContainer key={id} {...{ image, name, price, status, id }} />
        ))}
      </div>
    </div>
  );
}

export default CardBox;
