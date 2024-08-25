import React from "react";
import CardBox from "./cardsBox";



function Products({data}) {
  return <CardBox {...{ data }} />;
}

export default Products;
