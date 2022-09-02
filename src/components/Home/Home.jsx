import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCity from "../../actions/getCity";
import Cards from "../Cards/Cards";

export default function Home() {
  const asd = useSelector((state) => state.citiesLoaded);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("asd");

    dispatch(getCity("necochea"));
  });

  return <Cards />;
}
