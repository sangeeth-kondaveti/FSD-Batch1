import React, { useContext } from "react";
//import { NameContext } from "./ExampleContext";
import { useGlobalContext } from "./ExampleContext";
export function Sample3() {
  const data = useGlobalContext();

  return <div>Hey {data}</div>;
}

