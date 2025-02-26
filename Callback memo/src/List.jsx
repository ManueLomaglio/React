import React, { useState } from "react";
import FilteredList from "./FilteredList";

const data = [
  { id: 1, name: "giorgio", age: 25 },
  { id: 2, name: "abdulahim", age: 17 },
  { id: 3, name: "carletto", age: 30 },
  { id: 4, name: "damiano", age: 15 },
];

function List() {
  const [list, setList] = useState(data);

  const handleClick = () =>
    setList([...list, { id: 5, name: "emmanuela", age: 19 }]);

  return (
    <div>
      <FilteredList list={list} />
      <button onClick={handleClick}>Add</button>
    </div>
  );
}
export default List;
