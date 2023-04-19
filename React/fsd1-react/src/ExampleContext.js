import React, { createContext, useContext } from "react";
import { DisplayData } from "./DisplayData";
import { Sample3 } from "./Sample3";

export const NameContext = createContext();

function ExampleContext() {
  const name = "Jack";
  return (
    <NameContext.Provider value={name}>
      <div>
        <h1>Context Example</h1>
        <h2>{name}</h2>
        <Sample1 />
        <Sample2 />
        <Sample3 />
      </div>
    </NameContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(NameContext);
};

function Sample1() {
  const data = useContext(NameContext);

  return <div>Hello {data}</div>;
}

function Sample2() {
  const data = useContext(NameContext);

  return <div>Welcome {data}</div>;
}

export default ExampleContext;
