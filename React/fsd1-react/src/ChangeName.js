import { useState } from "react";

export function ChangeName() {
  const [name, setName] = useState("Mick");
  const [nameList, setNameList] = useState(["jack", "john", "peter"]);
  return (
    <div>
      {nameList.map((nl) => (
        <Sample name={nl} />
      ))}
      <input
        type="text"
        placeholder="Enter Name"
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={() => {
          setNameList([...nameList, name]);
          console.log(nameList);
        }}
      >
        Change Name
      </button>
    </div>
  );
}

function Sample({ name }) {
  return (
    <div>
      <h1>Welcome {name}</h1>
    </div>
  );
}
