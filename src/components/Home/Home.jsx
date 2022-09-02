import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import getCity from "../../actions/getCity";
import Cards from "../Cards/Cards";

export default function Home() {
  useEffect(() => {
    getCity("necochea");
  });

  return <Cards />;
}
