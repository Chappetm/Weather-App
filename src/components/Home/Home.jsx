import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import getCity from "../../actions/getCity";
import Cards from "../Cards/Cards";

export default function Home() {
  const asd = useSelector((state) => state.citiesLoaded);
  useEffect(() => {
    console.log("asd");

    getCity("necochea");
  }, [asd]);

  return <Cards />;
}
