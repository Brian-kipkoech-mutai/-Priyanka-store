import CardBox from "@/components/cardsBox";
import { listingData } from "@/Data/products";
import React from "react";
import { useSearchParams } from "react-router-dom";

function Listing() {
  const [getGender, _] = useSearchParams();
  const gender = getGender.get("gender");
  const filterdDat = listingData.filter(
    ({ gender: genderInData }) => gender !== genderInData
  );
  return <CardBox data={ gender?filterdDat:listingData} />;
}

export default Listing;
